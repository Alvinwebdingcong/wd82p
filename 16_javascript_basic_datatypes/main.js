// javaScript  Basic Data Types
// 1. Numbers
/* -Integers (e.g. 10, 400, -5)
    -foalting point numbers (e.g.12.5, 56.77795435)
  -
  **/
let age = 28;
let tempInCelsius = 38.5;

let myAge = parseInt("28");
let tempInFahrenheit = parseFloat("89.7");

let firstNumber = 10;
let secondNumber = 5;
let thirdNumber = parseInt("5");

console.log(secondNumber + secondNumber);

console.log(6 + 9); //addition
console.log(20 - 15); //subtraction
console.log(3 * 7); //mutiplication
console.log(10 / 5); // division
console.log(5 ** 2); //exponent
console.log(8 % 3); // remainder / modulo

console.log((5 % 9) * 10);
let year = 2023;
//increment
year = year + 1;
year++;
//decrement
year--;
console.log(year);

//assignment (=)
let x = 3;
let y = 4;
x *= y;

// comparison
let a = 5;
let b = 2;
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// 2. Strings
let string = "this is a string";
let single = "Single quotes";
let double = "double quotes";
let backtick = `backtick`;

console.log(typeof single);
console.log(typeof double);
console.log(typeof backtick);

console.log("the values of single:" + single);

const name = "alvin";
const greeting = `hello, ${name}`;

console.log(greeting);

const one = "hello";
const two = "how are you?";
const joined = `${one}, ${two}`;
console.log(joined);

const song = "fight the youth";
const score = 9;
const highestScore = 10;
const output = `i like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
const newline = `One day you finally know what you had to do, and began`;
console.log(outpit);

// 3,boolean
// true or false
// 0 = falsy
// 1 = truthy
