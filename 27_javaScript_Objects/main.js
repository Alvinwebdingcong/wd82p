/*
// Create an object
const user = {
  name: "Carlo",
  age: 28,
  isAdmin: true,
  "likes birds": true,
};
// Read values in an object
user.name;
user.age;
user.isAdmin;
user["like birds"];

// Remove value in an object
delete user.age;

// Add/Change values in an object
user.job = "Software Engineer";
user.name = "alvin";
// Property value shortcut
function makeUser(name, age) {
  return { name, age };
}
let user2 = makeUser("John", 30);
let user3 = makeUser("Peter", 50);

// Property Names Limitations

let obj = {
  return: 0,
  0: "return",
};

// Loop of an object
// for (let key in user) {
//   console.log(user[key]);
// }
*/
/*
// exercise 1

function user(name, surname) {
  return { name, surname };
}
let user1 = user("John", "Smith");

user1.name = "Pete";
delete user1.name;
console.log(user1);*/

// exercise 2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

let schedule = {};

console.log(isEmpty(schedule));

// Exercise 3:

function sumofallsalaries(salaries) {
  let sum = 0;

  for (let salary in salaries) {
    sum += salaries[salary];
  }
  return sum;
}
let salaries = {
  john: 100,
  Ann: 160,
  Pete: 130,
};

console.log(sumofallsalaries(salaries));
