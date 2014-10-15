function addScore(level, score) {
    var bonus = level * score * 1.1;
    return bonus;
}

console.log(addScore(1, 543));

function bark(dogName, dogWeight) {
    if( dogWeight <= 10) {
        return dogName + " says Yip";
    } else {
        return dogName + " says Woof";
    }
}

console.log(bark("Luna", 40));
console.log(bark("Tarzan", 4));
