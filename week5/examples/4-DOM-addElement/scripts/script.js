// We're going to add a new list item to the list

// 1. Create a new list item
var listItem = document.createElement("li");

// 2. Set it's innerHTML
listItem.innerHTML = "Walk the dog";

// 3. Get the element we want to add it to
var list = document.getElementById("todo");

// 4. Add the list item to the element
list.appendChild(listItem);