// Datatypes

// Primary datatypes
var carFuel = 10;       // integer/number (no quotes)
var carColor = "Red";   // string (quotes!)
var hasAirco = true;    // boolean (either true of false)

console.log(carFuel); // 10

// Composite datatypes
// Array
var fuelTypes = ["Gas", "Diesel", "Gasoline"]; // you can throw anything into an array, even other arrays

console.log(fuelTypes); // ["Gas", "Diesel", "Gasoline"]
console.log(fuelTypes[0]); // Gas
console.log(fuelTypes[1]); // Diesel

// Object
var car = {
    fuel: 10,
    color: "Red",
    hasAirco: true
}; // you can throw anything into an object

console.log(car); // Object {fuel: 10, color: "Red", hasAirco: true}
console.log(car.fuel); // 10
console.log(car.color); // "Red"