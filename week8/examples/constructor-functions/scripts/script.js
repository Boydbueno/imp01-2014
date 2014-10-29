function Dog(name, weight) {
    this.name = name;
    this.weight = weight;
    this.bark = function() {
        console.log("Woof");
    }
}

var fido = new Dog("Fido", 40);

console.log(fido.name);
fido.bark();