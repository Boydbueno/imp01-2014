// Create a function
function nameOfFunction() {
    // Code to execute
    console.log("Executing function nameOfFunction");
}

// Execute the function
nameOfFunction(); // "Executing function nameOfFunction"

// Example usage
function calculating() {
    console.log("Calculating:");
    var number1 = 4;
    var number2 = 50;
    console.log(number1, " + ", number2, " = ", number1 + number2);
    console.log(number1, " - ", number2, " = ", number1 - number2);
    console.log(number1, " * ", number2, " = ", number1 * number2);
}

if (currentAction == "calculating") {
    calculating(); // Execute the function
}

// Function with parameters
function output(message) {
    console.log(message);
}
output("Some message"); // "Some message"
// Makes it easy to change how 'output' works through your application

// Function which returns a value (to continue working with)
function getTotalScore(level, score) {
    // Let's imagine there is some weird formula to calculate some score
    var totalScore = (level * score) + (score * 0.4 * level);
    // return the total score
    return totalScore;
}

// Variables created inside functions are not accessible outside of the function
function someFunction() {
    var someVar = "pizza";
}

console.log(someVar); // Error!