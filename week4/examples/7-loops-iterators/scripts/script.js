// While loop
var statement = true;
// while the statement is true, the code block will run (and rerun again and again)
// Below loop is endless, so commented out.
//while (statement) {
//    console.log("Endless loop")
//}

console.group("while loop example");
var currentSpeed = 120;
while (currentSpeed < 140) { // The code block will keep repeating as long as the currentSpeed is below 140
    currentSpeed++;
    console.log(currentSpeed);
}
console.groupEnd();

// For loop
console.group("for loop example");
var amountOfTires = 4;
for(var i = 1; i <= amountOfTires; i++) {
    console.log("Wiel " + i + " is vervangen");
}
console.groupEnd();

// looping through an array
console.group("loop through array 1");
var times = [10, 32, 45, 12, 45];
// magic word 'itar'
for (var i = 0; i < times.length; i++) {
    var time = times[i];
    console.log(time);
}
console.groupEnd();

// alternative way
console.group("loop through array 2");
times.forEach(function(time) {
    console.log(time);
});
console.groupEnd();