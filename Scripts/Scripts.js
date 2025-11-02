// 1. Declare Variables for the First Story (Use 'let' and 'const')
let character = "Coby";
let action = "crawled under the bed";
let object = "Television remote";
let place = "in the bedroom";
let time = "midnight";

// Using 'let' instead of 'const' so we can change the value later
let occasion = "a mischief dog"; 

// 2. Create the First Story
console.log("--- A Coby Story ---");
console.log(character + " was lying " + place + " at " + time + ".");
console.log(character + " " + action + ", picked up the " + object + " and started to chew it.");
console.log("The whole thing was part of " + occasion + "'s plan!");

// 3. Experiment with Different Values
console.log("--- A Different Version of the Story ---");

// Reassign the 'let' variables
character = "Cooper"; 
action = "picked up food bowl"; 
object = "dog food"; 
place = "in the tv room"; 
time = "morning"; 

occasion = "a hungry pup"; 

// Output the different version of the story (for Cooper)
console.log(character + " was lying " + place + " at " + time + ".");
console.log(character + " " + action + " and decided to eat the " + object + " instead.");
console.log("It was a great " + time + " for " + occasion + "!");