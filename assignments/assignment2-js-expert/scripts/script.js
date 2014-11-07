var gameSettingsEl = document.getElementById("js-game-settings");
var scoreBoardEl = document.getElementById("scoreboard");
var player1El = document.getElementById("player1-name");
var player2El = document.getElementById("player2-name");
var availableCards = ["bat", "bug", "cat", "dog", "fly", "frog", "monkey", "mouse", "spider"];

var hasGameStarted = false;
var firstCardOpened = null;

var player1Name;
var player2Name;
var currentPlayer = 1;

gameSettingsEl.addEventListener("submit", startGame);

/**
 * Start the game
 * @param {Event} e
 */
function startGame(e) {
    e.preventDefault();

    // If the game has already started, don't do anything
    if (hasGameStarted) return;

    var difficulty = document.getElementById("js-difficulty").value;
    player1Name = document.getElementById("player1").value;
    player2Name = document.getElementById("player2").value;

    // If no difficulty has been selected, or no players have been entered, don't do anything
    if (difficulty == "" || player1Name == "" || player2Name == "") return;

    var count;
    if (difficulty == "makkelijk") {
        count = 8;
    } else {
        count = 12;
    }

    var cards = getRandomCards(count);
    cards = shuffle(cards);

    addCardsToDom(cards);

    showScoreboard();

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
        cards.push(randomCard, randomCard);
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
 * Change the view in the sidebar to show player scoreboard
 */
function showScoreboard() {
    scoreBoardEl.classList.remove("hidden");

    player1El.innerHTML = player1Name;
    player2El.innerHTML = player2Name;
    gameSettingsEl.classList.add("hidden");
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

    var playerIndicator = document.createElement("span");
    playerIndicator.className = "player-indicator";

    card.appendChild(playerIndicator);
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
            increaseScoreOfCurrentPlayer();
        } else {
            setTimeout(function() {
                closeCards(cardsToClose);
            }, 1000);
            nextPlayer();
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
    card.children[0].innerHTML = currentPlayer.toString();
    card.classList.remove("closed");
}

/**
 * Switch the turn to the next player
 */
function nextPlayer() {
    if (currentPlayer == 2) {
        currentPlayer = 1;
    } else {
        currentPlayer++;
    }
}

/**
 * Increase the score of the current player
 */
function increaseScoreOfCurrentPlayer() {
    var playerScoreEl = document.getElementById("player" + currentPlayer + "-score");
    var currentScore = playerScoreEl.innerHTML;
    playerScoreEl.innerHTML = parseInt(currentScore) + 1;
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

/**
 * Fisher-Yates shuffle
 * http://bost.ocks.org/mike/shuffle/
 * @param array
 * @returns {Array}
 */
function shuffle(array) {
    var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * array.length);

        // If not already shuffled, move it to the new array.
        if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
        }
    }

    return copy;
}