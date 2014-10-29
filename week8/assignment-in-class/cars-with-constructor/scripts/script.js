function Car(type, price) {
    this.type = type;
    this.price = price;
}

var cars = [];

cars.push(new Car('a1', 18750));
cars.push(new Car('adam', 13450));
cars.push(new Car('Focus', 23000));

for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    console.log(car.price);
}