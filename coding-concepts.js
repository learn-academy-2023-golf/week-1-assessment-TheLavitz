// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"];
console.log(colors.push("indigo"));

// a) Your answer: 5
// b) Verify and explain: Correct. When you log the ouput of a .push you get the length of the array after the value is added.

// --------------------1) What will this log?

const cohort = "LEARN 2023";
console.log(cohort.length);

// a) Your answer: 10
// b) Verify and explain: Correct. Strings also have a length property and this inculdes spaces.

// --------------------2) What will this log?

const greeting = "Hello World!";
console.log(greeting[4]);

// a) Your answer: "o"
// b) Verify and explain: Correct. Because indexes begin with 0 the fifth character in this string occupies index 4.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"];
const index = 1;
console.log(languages[index]);

// a) Your answer: Ruby
// b) Verify and explain: Correct. As explained previously the value "Ruby" occupies the 1 index and since the variable index contains the value 1 when you read the value contained that the index [index] ([1]) of the array languages you get "Ruby".

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"];
// console.log(weekendDays.toUpperCase());

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: Incorrect. The built-in-method .toUpperCase() cannot be ran on arrays, only strings.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"];
console.log(typeof dataTypes.length);

// a) Your answer: Number
// b) Verify and explain: Correct. When you access the .length property of an array a value of "data type - number" is generated, in this case 4, and the typeof operator rightly identifies the number 4 as "data type - number".
