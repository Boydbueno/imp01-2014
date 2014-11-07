var gameSettings = document.getElementById("js-game-settings");
var availableCards = ["bat", "bug", "cat", "dog", "fly", "frog", "monkey", "mouse", "spider"];

var hasGameStarted = false;
var firstCardOpened = null;

gameSettings.addEventListener("submit", startGame);

/**
 * Start the game
 * @param {Event} e
 */
function startGame(e) {
    e.preventDefault();

    // If the game has already started, don't do anything
    if (hasGameStarted) return;

    var difficulty = document.getElementById("js-difficulty").value;

    // If no difficulty has been selected, don't do anything
    if (difficulty == "") return;

    var count;
    if (difficulty == "makkelijk") {
        count = 8;
    } else {
        count = 12;
    }

    var cards = getRandomCards(count);
    //cards = shuffle(cards);

    addCardsToDom(cards);

    hasGameStarted = true;
}

/**
 * Gets given amount of random card pairs from the available cards array.
 * @param {number} count
 * @returns {Array}
 */
function getRandomCards(count) {
    // Get a copy of the available cards
    var allCards = availableCards.slice(0);
    var differentCards = count / 2;
    var cards = [];
    var randomIndex;
    var randomCard;

    while (differentCards--) {
        randomIndex = Math.floor(Math.random() * allCards.length);
        // Remove a card from the allCards array by it's index
        randomCard = allCards.splice(randomIndex, 1);
        // Add the random card twice to get a pair
        cards.push( randomCard, randomCard );
    }

    return cards;
}

/**
 * Add the provided cards to the dom
 * @param {Array} cards
 */
function addCardsToDom(cards) {
    var cardCount = cards.length;
    while (cardCount--) {
        var cardElement = createCard(cards[cardCount]);
        document.getElementById("js-playfield").appendChild(cardElement);
    }
}

/**
 * Create a card
 * @param cardPicture
 * @returns {HTMLElement}
 */
function createCard(cardPicture) {
    var wrapper = document.createElement("div");
    wrapper.className = "card-wrapper";

    var card = document.createElement("div");
    card.className = "card closed " + cardPicture;
    card.addEventListener("click", clickCardHandler);

    wrapper.appendChild(card);

    return wrapper;
}

/**
 * @param {Event} e
 */
function clickCardHandler(e) {
    var card = e.target;
    // If the card is already open, don't do anything
    if (isCardOpen(card)) return;

    openCard(card);

    if (firstCardOpened) {
        // Remember the cards to close, because firstCardOpened will be changed before code in setTimeout will trigger
        var cardsToClose = [card, firstCardOpened];
        if (isCardCorrect(card)) {
            // Correct cards, we keep them open, so we do nothing special
        } else {
            setTimeout(function() {
                closeCards(cardsToClose);
            }, 1000);
        }

        firstCardOpened = null;
    } else {
        firstCardOpened = card;
    }
}

/**
 * Open given card
 * @param {HTMLElement|EventTarget} card
 */
function openCard(card) {
    card.classList.remove("closed");
}

/**
 * Close all cards in the array
 * @param {Array} cards
 */
function closeCards(cards) {
    cards.forEach(closeCard);
}

/**
 * Close a single card
 * @param {HTMLElement|EventTarget} card
 */
function closeCard(card) {
    card.classList.add("closed");
}

/**
 * Check if the given card is the correct card for a match
 * @param {HTMLElement|EventTarget} card
 * @returns {boolean}
 */
function isCardCorrect(card) {
    // We compare the second classes of the element, should be the type.
    // Note: Not the best way to compare, adding classes could break this.
    return card.classList[1] == firstCardOpened.classList[1];
}

/**
 * Check if the given card is open
 * @param {HTMLElement|EventTarget} card
 * @returns {boolean}
 */
function isCardOpen(card) {
    return !card.classList.contains("closed");
}