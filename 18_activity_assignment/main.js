console.log("Exercise 1");

// Declare a variable called 'balance' and assign it a starting balance of 1000.
// Create variables 'transaction1', 'transaction2', and 'transaction3' to represent three transactions.
// Update the 'balance' variable after each transaction:
// - 'transaction1': Add 500 to 'balance'.
// - 'transaction2': Deduct 200 from 'balance'.
// - 'transaction3': Deduct 1000 from 'balance'.

// Your code here

// Log the final 'balance' after all three transactions.

let balance = 1000;

let transaction1 = 500;
balance += transaction1;
console.log("Balance after Transaction 1: " + balance);

let transaction2 = -200;
balance += transaction2;
console.log("Balance after Transaction 2: " + balance);

let transaction3 = -1000;
balance += transaction3;
console.log("Balance after Transaction 3: " + balance);

console.log("Exercise 2");

// Create three variables 'testScore1', 'testScore2', and 'testScore3' and assign them different test scores as numbers.
// Calculate the average test score of these three scores and store it in a variable called 'averageScore'.
// Round the 'averageScore' to the nearest integer using Math.round().

// Your code here

// Log the 'averageScore' to the console.

let testScore1 = 75;
let testScore2 = 76;
let testScore3 = 79;

let averageScore = testScore1 + testScore2 + testScore3;

console.log("Test Score 1: " + testScore1);
console.log("Test Score 2: " + testScore2);
console.log("Test Score 3: " + testScore3);
console.log("total testScore:" + averageScore);
console.log("divide by 3 because the testScore is 3");
Math.round(averageScore);
console.log("result:" + averageScore / 3);

console.log("Exercise 3");

// Create a variable called 'temperature' and assign it a temperature value in Celsius.
// Write a conditional statement (if-else) to determine the weather condition based on the temperature:
// - If the temperature is above 30°C, log "It's hot outside!"
// - If the temperature is between 20°C and 30°C (inclusive), log "The weather is pleasant."
// - If the temperature is below 20°C, log "It's a bit chilly."

// Your code here

let temperature = 30;

if (temperature < 40) {
  console.log("It's hot outside!.");
}
if (temperature >= 25) {
  console.log("The weather is pleasant");
}
if (temperature >= 20) {
  console.log("It's a bit chilly");
}
