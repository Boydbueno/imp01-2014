var mercedes = {
    type: 'a1',
    price: 18750
};

var opel = {
    type: 'adam',
    price: 13450
};

var fort = {
    type: 'Focus',
    price: 23000
};

var cars = [];

cars.push(mercedes);
cars.push(opel);
cars.push(fort);

for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    console.log(car.price);
}