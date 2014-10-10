var currentAction = "calculating"; // whilelooping, forlooping, calculating

switch (currentAction) {
    case "calculating":
        calculating();
        break;
    case "whilelooping":
        whilelooping();
        break;
    case "forlooping":
        forlooping();
        break;
}

function calculating() {
    outputCurrentAction();
    output(10 + 22);
}

function whilelooping() {
    outputCurrentAction();
    // Todo: Do some whilelooping
    output("Doing some whilelooping");
}

function forlooping() {
    outputCurrentAction();
    // Todo: Do some forlooping
    output("Doing some forlooping");
}

function outputCurrentAction() {
    output("Current action is " + currentAction);
}

function output(message) {
    //console.log(message);
    var outputElement = document.getElementById("output");
    outputElement.innerHTML += message;
}