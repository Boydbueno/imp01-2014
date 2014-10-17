// Creating an array
var fuelTypes = [];
console.log(fuelTypes); // []

// Filling the array
fuelTypes[0] = "Gas";
fuelTypes[1] = "Diesel";
fuelTypes[2] = "Gasoline";
fuelTypes[3] = "Electricity";
console.log(fuelTypes); // ["Gas", "Diesel", "Gasoline", "Electricity"]

// Combined
var fuelTypes = ["Gas", "Diesel", "Gasoline", "Electricity"];
console.log(fuelTypes); // ["Gas", "Diesel", "Gasoline", "Electricity"]

// Get one value from array (index starts with zero)
console.log(fuelTypes[0]); // Gas
console.log(fuelTypes[2]); // Gasoline

// Overwrite a value
fuelTypes[2] = "Bunnies";
console.log(fuelTypes); // ["Gas", "Diesel", "Bunnies", "Electricity"]

// Add item to end of array
fuelTypes.push("Air");
console.log(fuelTypes); // ["Gas", "Diesel", "Bunnies", "Electricity", "Air"]

// Get the last value
var lastIndex = fuelTypes.length -1; // 4
console.log(fuelTypes[lastIndex]); // Air

// Loop through array with for loop (itar)
console.group("Loop with for loop");
for (var i = 0; i < fuelTypes.length; i++) {
    console.log(fuelTypes[i]);
}
console.groupEnd();

// Extra: Loop with foreach
console.group("Loop with forEarch");
fuelTypes.forEach(function(fuelType) {
    console.log(fuelType);
});
console.groupEnd();