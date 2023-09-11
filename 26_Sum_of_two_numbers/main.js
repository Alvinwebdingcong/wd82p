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
