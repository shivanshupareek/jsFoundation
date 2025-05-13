/*
1. Write a function that takes a number and returns whether it's an integer or not.
2. Declare a variable and assign it an array. Check if it's truly an array.
3. Create an object representing a person with properties like name, age, and city.
4. Convert a string that contains a number (e.g., `"123"`) into an actual number and perform an arithmetic operation on it.
5. Write a function that checks whether a given value is of type `boolean`.
6. Create a date object for the current date and time, and log it to the console.
7. Write a function that converts a decimal number to a string with two decimal places.
8. Write a function that takes a string and returns the number of characters in it.
9. Compare `undefined` and `null` using both `==` and `===`. What’s the difference?
10. Write a function that generates a random number between 1 and 100.
*/

//1
function integerTest(num) {
  if (Number.isInteger(num)) {
    return console.log(`${num} is an integer`);
  } else {
    return console.log(`${num} is not an integer`);
  }
}
integerTest(10);

//2
const arrayTest = [1, 2, 3, 4, 5];
if (Array.isArray(arrayTest)) {
  console.log(`${arrayTest} is an array`);
}

//3
const person = {
  name: "Sheila",
  age: 30,
  city: "Los Angeles",
};
console.log(person);

//4
const numString = "10";
const actualNum = Number(numString);
console.log(actualNum * 2); //20

//5
function isBoolean(data) {
  return typeof data;
}

isBoolean(true);

//6
const date = new Date();
console.log(date);

//7
function decToString(num) {
  return num.toFixed(2);
}
decToString(123.456);

//8
function stringCalc(str) {
  return str.length;
}
stringCalc("hello");
