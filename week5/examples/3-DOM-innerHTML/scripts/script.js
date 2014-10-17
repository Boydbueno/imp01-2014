// Get an element by id
console.log(document.getElementById("todo"));
// We can store this in an var to store it.
var todoElement = document.getElementById("todo");

// Get the innerHTML the todoElement
console.log(todoElement.innerHTML);

// Overwrite the innerHTML of the todoElement
// todoElement.innerHTML = "Lalal"; // Note: because this is 'live' it also changes in the page

// Get the innerHTML of all todoListItems
var todoListItems = document.getElementsByTagName("li"); // array with all li items

// for loop to loop through (itar)
for (var i = 0; i < todoListItems.length; i++) {
    var todoListItem = todoListItems[i];
    console.log(todoListItem.innerHTML); // Get the innerHTML and log it
}

// Note: You cán't use forEach to loop through them, does not work with this type of array
// If you don't know forEach loop, you can ignore this