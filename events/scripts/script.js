var submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", buttonClickHandler);

function buttonClickHandler(event) {
    event.preventDefault();
    var inputValue = document.getElementById("todo-input").value;
    console.log(inputValue);

    // Todo: Add a new li to ul
    // Hint: Use appendChild
}