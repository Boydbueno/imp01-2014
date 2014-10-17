var mercedes = ["a1", 18750];
var opel = ["Adam", 13450];
var ford = ["focus", 23000];

var cars = [];

// Add the car arrays to cars
cars.push(mercedes, opel, ford);

// Loop through all cars and log the price
for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    console.log(car[1]);
}