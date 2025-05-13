/*
In Javascript, there are three types of variables: 
    1. var
    2. let
    3. const
*/

// There are three elements inside a variable, the type of variable(i.e. var/let/const), the name ofthe variable, and the value of the variable.)
//let's start with var

var x = 10;
x = 20;

/*
==> we can change the value of the variable "x" as many times as we want..
==> x is now changed from x = 10 to x = 20
==> when we change the value of a variable(var), we do not have to use the var keyword again, only the name and the new value.
==> using the var keyword again will create a new variable with the same name, but a different value, that will create an error.
*/

{
  var z = 1; //inside a block
}

z = 2;

/*
==> since var is a global variable, you can change it anywhhere in the code and this time we have changed the value of z from 1 to 2 outisde it's block. 
==> we can do this with a function too, for example:
*/

function scoping() {
  //this is a function block, more about functions in the functions.js file
  var y = 5; //inside a function
}

y = 10; //outside the function

/*
==> this will still work because var is a global variable and can be changed anywhere in the code.
==> As you can see, when we will use var in large prokects, the beaviour will be unpredictable because we won't be able to always control it's value. 
    when the code gets larger, it cna be difficult to keep track of the value of a variable and it will create a lot of bugs in the code.
==> After 2016, ES6 was introduced and the var keyword was replaced with let and const keywords. 
==> This is why we no longer use var and it is always switched with let and const. 
==> The closest thing to var is let as it will allow us to change the value of the varable just like var but in a more controlled way.
==> On the other hand, const is a constant variable which means that it will not allow us to change the value of the variable once it is declared.
*/

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
