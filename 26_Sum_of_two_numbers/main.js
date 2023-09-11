// 1.)Sum of two numbers
let a = 1;
let b = 2;

const sum = a + b;

console.log(sum);

// 2.)Factorial number
let n = 4;
let x = 3;
let y = 2;
let c = 1;

const factorial = n * x * y * c;

console.log(factorial);

// 3.)Reverse a String

const numbers = ["one", "two", "three"];
console.log(numbers);

const backward = Math.reverse(numbers);
console.log(backward);

// 4.)Find the largest Number of an Array

const digits = [20, 5, 8, 120, 100, 90];

const find = Math.max(...digits);

console.log(find);

// 5.)Palindrome Checker
// Palindrome are the words the reads the same even though you read backwards.
function palindrome(string) {
  const original = string.replace(/\s/g, "").toLowerCase();
  const reverse = original.split("").reverse().join("");
  return original === reverse;
}
console.log(palindrome("Mom"));
console.log(palindrome("racecar"));
console.log(palindrome("Not a palindrome"));
console.log(palindrome("Taco cat"));
console.log(palindrome("Yo banana boy"));
console.log(palindrome("wow"));
console.log(palindrome("yehey"));
console.log(palindrome("huray"));
console.log(palindrome("yaho"));
console.log(palindrome("alvin"));
