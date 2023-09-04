let userInput = parseInt(prompt("Enter a number"));

for (let i = 1; i <= userInput; i++) {

  // if (i % 3 === 0) {
  // console.log("fizz");
  // } else {
  // console.log(i);
  // }
  // }
  if (i % 3 == 0) and(i % 5 == 0){
    console.log("FizzBuzz")
  }
   if (i % 3 == 0){
    console.log("fizz")
  }
   if (i % 5 == 0){
    console.log("Buzz")
  }
  else{
    console.log(i);
  }
}

