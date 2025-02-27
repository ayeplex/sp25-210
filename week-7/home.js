console.log("Cozy home");

console.log("2 + 7 =", 2 + 7);

console.log("2 + 2 =", "2" + "2"); // This will concatenate the strings, resulting in "22"

console.log("My name is " + "Ty");

console.log("2 + 2 =", 2 + Number("2")); // Converts "2" to a number before addition

if (true) {
    console.log("always true");
} else {
    console.error("this should never happen");
}

let money = 0.75; // Lowercase 'let'

if (money >= 0.51) {
    console.log("You pay for a bus ticket");
    money -= 0.5; // Subtract 0.5 from money
} else if (money >= 0.25) {
    console.log("Catch a ride with the mysterious hat person");
    console.warn("Sounds a lil sus, *among us* sound, but do yo thing cuzzo");
} else {
    console.log("You're broke, walk home");
    console.warn("It's a 5-hour walk buddy, now gon' GET!");
}
