var shoppingList = [];

// er wordt op knop gedrukt
// We halen waardes op
var naam = "eieren";
var price = 13;

var item = [naam, price];
shoppingList.push(item);

naam = "brood";
price = 7;

item = [naam, price];
shoppingList.push(item);


console.log(shoppingList[0][1]);