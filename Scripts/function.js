console.log("function");

// Function Declaration (create)
function sayHello() {
    console.log("Welcome to Angry Birds!");
}


// Call /run/trigger/execute the function 
sayHello();
sayHello();

// --- Example 2 with 1 parameter ---
function greetBird(birdName) {
    console.log(`Hello ${birdName}! Ready to destroy some pigs?`);
}

greetBird("Red");
greetBird("Blue");
greetBird("Bomb");

// --- Example 3 with 2 parameters ---
function greetPlayer(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName}`);
}

greetPlayer("Kolton", "Short");
greetPlayer("Cayden", "Short");

// --- Challenge 1: Double Score ---
// task:
// create a function called 'doubleScore' that takes one number (the player's score).
// The function should display the score multiplied by 2.
function doubleScore(score) {
    let total = score * 2;
    console.log(`Your new score is: ${total}`);
}

doubleScore(10); // Output: Your new score is: 20
doubleScore(50); // Output: Your new score is: 100
doubleScore(1000); // Output: Your new score is: 2000


// --- Example 4 with prompt() ---
function askPigName() {
    // NOTE: 'prompt' works in browser environments, not typically in Node.js/simple consoles.
    let pigName = prompt("Enter Pig's name");
    console.log(`Target: ${pigName}`);
}

// Uncomment the line below to run the prompt (in a browser environment)
// askPigName();


// --- Function to Add Points ---
function addPoints(points1, points2) {
    let total = points1 + points2;
    console.log(`Total points earned: ${total} `);
}
addPoints(100, 200);
addPoints(0, 20);
addPoints(50, 100);

// --- Challenge 2: Convert Minutes to Seconds (Version 1: Return Value) ---
// This version is generally preferred as it returns the calculated value.
function convertToSeconds(minutes) {
    const seconds = minutes * 60;
    return seconds;
}

// Call the function with different values of minutes and print the results.
console.log(`5 minutes is ${convertToSeconds(5)} seconds.`);
console.log(`1.5 minutes is ${convertToSeconds(1.5)} seconds.`);


// --- Challenge 2: Convert Minutes to Seconds (Version 2: Prompt and Display) ---
// This version prompts for input and displays the result directly.
function convertToSecondsPrompt() {
    let mins = prompt("Enter the mins:");
    let secs = mins * 60;
    console.log(`${mins} minutes are ${secs} seconds.`); // display/print
}

// This is how you would trigger the prompt version (often via a button on the HTML)
// convertToSecondsPrompt();
