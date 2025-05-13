/*
1. eclare a variable to store your full name and print it to the console.
2. Swap the values of two variables without using a temporary variable.
3. Create a variable that stores your age and update it after a year passes.
4. Declare a constant for the value of Pi and try modifying it. What happens?
5. Create two variables, `x` and `y`, and print the result of their addition.
6. Use the `let` keyword to declare a variable inside a block and try accessing it outside the block. What do you observe?
7. Declare a variable without assigning any value. Print its type.
8. Reassign a variable declared with `var` inside a function. Does it affect the global variable with the same name?
9. Declare a string variable that contains both single and double quotes.
10. Initialise a variable with a null value and print its type.
*/

//1
const fullName = "John doe";
console.log(fullName);

//2
let a = 5;
let b = 10;

a = 10;
b = 5;

//3
let brithYear = 1990;
const date = new Date();
const year = date.getFullYear(toString);
const age = year - brithYear;
console.log(`Age is ${age}`);

//4
const pi = 3.14;
pi = 3.15; // error

//5
const x = 10;
const y = 20;
const sum = x + y;
console, log(sum);

//6
{
  let blockedLet = 1;
}

blockedLet = 2; //error

//7
let alpha;
console.log(typeof alpha); //undefined

//8
function test() {
  var logic = 99;
}

var logic = 100;
//both are seperate

//9
const doubleQuotes = "Hi, 'Mark'";

//10
let value = null;
console.log(typeof value); //object
