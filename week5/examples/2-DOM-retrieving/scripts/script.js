// Get an element by id
console.log( document.getElementById("todo") );
// We can store this in an var to store it.
var todoElement = document.getElementById("todo");

// Get elements by tagName
var uls = document.getElementsByTagName("ul"); // returns an array
// Remember! Returns array!
console.log(uls);
// If we only want the first (and only item in this case):
console.log(uls[0]);

// Same works with classNames
// document.getElementsByClassName("someClass");

// Get all li's
var todoListItems = document.getElementsByTagName("li");

// Loop though all list items
for (var i = 0; i < todoListItems.length; i++) {
    var todoListItem = todoListItems[i];
    // Do something with todoListItem
}