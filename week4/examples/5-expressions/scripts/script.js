// {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators}
// Arithmetic operators (forget the name, operators that do something with numbers)
console.group("expressions that return numbers");
console.log(100 * 1.2); // 120
console.log(100 + 40); // 140

var currentSpeed = 100;
console.log(currentSpeed * 1.2); // 120
console.groupEnd();

// Comparison operators (return true or false)
console.group("expressions that return true or false");
console.log(120 > 100); // true
console.log(100 == 101); // false
console.log(100 != 101); // true
console.log(120 > 120); // false;
console.log("pizza" == "appel"); // false
var carBrand = "Opel";
console.log(carBrand == "Renault"); // false
console.groupEnd();

// String expressies
console.group("expressions that return a string");
console.log("ik heb een " + "Opel"); // "ik heb een Opel"
console.log("ik heb een " + carBrand); // "ik heb een Opel"

console.log("ik heb een Opel".charAt(3)); // "h"
console.log("ik heb een Opel"[3]); // "h"

console.log(carBrand.toUpperCase()); // OPEL
console.log(carBrand.length); // 4
console.groupEnd();