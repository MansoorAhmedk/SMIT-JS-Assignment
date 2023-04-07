// Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

if (Number(firstNumber) > Number(secondNumber)) {
  console.log("The larger number is: " + firstNumber);
} else {
  console.log("The larger number is: " + secondNumber);
}


// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let num = prompt("Enter a number:");

if (num > 0) {
  alert("The number is positive.");
} else if (num < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}


// Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");

let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

if (num5 > largest) {
  largest = num5;
}

console.log("The largest number is: " + largest);


// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

//  Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.



  let studentMarks = [80, 90, 70, 60, 85];

let totalMarks = 0;
let averageMarks = 0;

for (let i = 0; i < studentMarks.length; i++) {
  totalMarks += studentMarks[i];
}

averageMarks = totalMarks / studentMarks.length;

console.log("The average marks are: " + averageMarks);

if (averageMarks >= 90) {
  console.log("The corresponding grade is: A+");
} else if (averageMarks >= 80) {
  console.log("The corresponding grade is: A");
} else if (averageMarks >= 70) {
  console.log("The corresponding grade is: B");
} else if (averageMarks >= 60) {
  console.log("The corresponding grade is: C");
} else {
  console.log("The corresponding grade is: F");
}


// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  
//   Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
  