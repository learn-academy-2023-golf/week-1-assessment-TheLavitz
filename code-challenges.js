// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
//const fruit1 = "apple";
//const fruit2 = "banana";
// Expected outcome: "banana"

// Set two:
const fruit1 = "cherry";
const fruit2 = "kiwi";
// Expected outcome: "cherry"

// Pseudo code:
// I am going to use the conditional if()/else() statement to compare the lengths of the strings contained in the provided variables using the built-in-method .length and then output the value returned as being longer using the function console.log.

if (fruit1.length > fruit2.length) {
  console.log(fruit1);
} else {
  console.log(fruit2);
}

// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];
// Expected output: 9

// Pseudo code:
// I am going to use the built-in-method .concat to combine the arrays contained in the provided variables and store that array in a new variable. I will then use the .length to output the length of the combined arrays in a console.log.

let padresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(
  padres1998WorldSeriesRuns
);
console.log(padresWorldSeriesRuns.length);

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023";
// Expected output: "3202 NRAEL"

// Pseudo code:
// In order to reverse the characters in the string that occupies the provided variable I will use built-in-method .split to generate an array containing the characters of the string that I will store in a new variable before reversing with the built-in-method .reverse and and combining those chracters back into a string using .join which will be stored in a third variable that I will output via console.log.

let currentCohortArray = currentCohort.split("");
currentCohortArray.reverse();
let reversedCohort = currentCohortArray.join("");
console.log(reversedCohort);

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10];
// Expected output: 13 5 -5 27

// Pseudo code:
// I will use the conditional if()/else() statement and moudlo within a for() loop to verify if a value from the provided array, when divided by 2, has a remainder of 0. If it does have a remainder of 0 then the value is even and will be ignored. If it does not have a remainder of 0 the value is odd and I will use the built-in-method .push to add the value to an array contained in a new variable. To make sure that the if()/else() statement has a chance to run on every value contained in the array I will step through the for() loop by assigning a variable the value of 0, verifying it is less than the length of the provided array, and then incrementing it by 1 using ++ after each loop. This will ensure that the loop only runs until it reaches the end of the array and provide a variable that I can use in my if()/else() statement to point at the index of the array I want to look at on each loop. I will then output the contents of the new array using console.log

let oddExchange = [];
for (let i = 0; i < stockExchange.length; i++) {
  if (stockExchange[i] % 2 != 0) {
    oddExchange.push(stockExchange[i]);
  }
}
console.log(oddExchange);
