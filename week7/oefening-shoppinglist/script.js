var button = document.getElementById("submit");

button.addEventListener("click", clickHandler);

var todoItems = [];

function clickHandler(e) {
    e.preventDefault();
    var todo = getData(); // ["shopping", "16-10-2014"]

    // Push item in todos array
    todoItems.push(todo);

    // Todo: Throw items in the DOM
    // Table leegmaken
    clearTable();

    // Door alle items loopen
    // Alle items in table plaatsen
    addItemsToTable();
}

function getData() {
    var item = document.getElementById("item").value; // item ophalen
    if (item == "") {
        var message = "Vul een omschrijving in!";
        document.getElementById("error").innerHTML = message;
    } else {
        document.getElementById("error").innerHTML = "";
    }

    var date = document.getElementById("date").value; // datum ophalen
    return [item, date]; // Als array returnen
}

function clearTable() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
}

function addItemsToTable() {
    for (var i = 0; i < todoItems.length; i++) {
        var item = todoItems[i];

        var tr = document.createElement("tr");
        var tdTodoDescription = document.createElement("td");
        tdTodoDescription.innerHTML = item[0];
        var tdTodoDate = document.createElement("td");
        tdTodoDate.innerHTML = item[1];
        tr.appendChild(tdTodoDescription);
        tr.appendChild(tdTodoDate);

        var todoList = document.getElementById("todoList");
        todoList.appendChild(tr);
    }
}