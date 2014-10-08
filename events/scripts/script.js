var submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", buttonClickHandler);

var listItems = document.getElementsByTagName("li");

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", liClickHandler);
}

function liClickHandler(event) {
    var clickedLi = event.target;
    clickedLi.remove();
    console.log(clickedLi);
}

function buttonClickHandler(event) {
    event.preventDefault();
    var inputElement = document.getElementById("todo-input");
    var inputValue = inputElement.value;

    // Todo: Create a li
    var li = document.createElement("li");
    // Todo: Fill the innerHTML of the li
    li.innerHTML = inputValue;

    // Todo: Add event listener to new list item
    li.addEventListener("click", liClickHandler);
    // Todo: append the li to the ul (appendChild)
    var todoList = document.getElementById("todo");
    todoList.appendChild(li);

    inputElement.value = "";
}