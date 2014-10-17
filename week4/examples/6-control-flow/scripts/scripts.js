// We'll look at some ways to control the flow of your program

// If statement
var statement = true;
if (statement) { // If the statement is true, this code block will run
    console.log("Statement is " + statement);
}

var currentSpeed = 140;
var maxAllowedSpeed = 120;

// If.. else
if (currentSpeed > maxAllowedSpeed) { // Anything that returns a boolean can be used
    console.log("You're driving too fast!");
} else { // If the 'if' statement isn't true, this code block will be run.
    console.log("You're not driving too fast");
}

var minAllowedSpeed = 80;

// Combining if's with an else
if (currentSpeed > maxAllowedSpeed) { // Anything that returns a boolean can be used
    console.log("You're driving too fast!");
} else if(currentSpeed < minAllowedSpeed ) { // If previous statement isn't true, we check this one
    console.log("You're driving too slow!");
} else { // If the 'if' statement isn't true, this code block will be run.
    console.log("Your speed is alright");
}