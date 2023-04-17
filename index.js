// Is truthy Problem
// If the value is truthy print true
// If the value is falsy print the result
let value = prompt("");
if (typeof value === "string") {
  console.log("I am a string");
} else if (value === true) {
  console.log(value);
} else if (value === false) {
  console.log("The boolean value false is falsy");
} else if (value === null) {
  console.log("The null value is falsy");
} else if (value === undefined) {
  console.log("undefined is falsy");
} else if (value === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
  console.log("The empty string is falsy (the only falsy string)");
} else {
  console.log("The value is truthy");
}

// Number Line problem
// use if else statments with javascript  that takes the sum of 2 num and prints the corresponding result

let num1 = 500;
let num2 = -500;

let sum = num1 + num2;

if (sum < -1000) {
  console.log(sum + " is less than -1000");
} else if (sum < 0) {
  console.log(sum + " is a negative number");
} else if (sum === 0) {
  console.log(sum + " is equal to 0");
} else if (sum > 0 && sum <= 100) {
  console.log(sum + " is larger than 0");
} else if (sum > 100) {
  console.log(sum + " is greater than 100");
}

// use if else  statemnets with javascript code that prints true if both parameters are greater or equal to 5

let num3 = 6;
let num4 = 4;

if (num3 >= 5 && num4 >= 5) {
  console.log(true);
} else {
  console.log(false);
}

// using if else and stict equality with javascropt code that compares two sets of two values. print true if at least one of the pairs is truthy

let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B = "6";

if (param1A === param1B || param2A === param2B) {
  console.log(true);
} else {
  console.log(false);
}