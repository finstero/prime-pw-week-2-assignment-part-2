// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it equal to the string 'Dane'.
// We write a conditional that compares the value of the name variable to the string value 'Mary'.
// The variable name is not the same as 'Mary', so the first part of the conditional will not run
// the code (i.e. it will not console.log 'Hi, Mary!').
// Then, the second part of the conditional will run, so it will console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret and leave it undefined.
// We make a variable called code and set it equal to the number 123.
// We write a conditional that first compares the variable code to the exact number value 123.
// The variable code is equal to 123 so this first part of the conditional runs, which
// sets the value of the variable secret to the string 'super'. Then, it multiples the value of
// the variable code (123) by 2, making code now equal to 246.
// Then the second part of the conditional (or is it a second conditional? not sure what is
// technically true if there are two if statements) checks if the variable code is more than 250.
// Code is not greater than 250, so the following code will not run (i.e. will not set secret equal to the string 'duper').
// Finally, the value of secret is console.logged, which is the string 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable isStudent and set it equal to the boolean true.
// We make a variable age and set it equal to the number 34.
// We make a variable zip and set it equal to the number 55407.
// We write a conditional that first checks if BOTH the variable isStudent is equal to the boolean true AND
// if the variable zip is greater than the number 80000. Only the first part is true, so the following code will not run.
// Then, the first else if checks if the variable isStudent is equivalent to the boolean false or if
// the variable age is less than 30. Neither of these is true, so the following code will not run.
// Then, the second else if checks if the variable is Student is equal to the boolean true. This
// is true, so the following code runs, console.logging 'Welcome to Prime!'
// The final else does not run, because a previous part of the conditional has already been found to be true and runs.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - the values for colorOne and colorTwo need to be swapped. i.e.
//let colorOne = 'blue'; and let colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - we need to add a missing line of code that sets colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
//FIX - need to declare time as a variable rather than a constant. Should be let time = 4;
//QUESTION - I'm a little confused whether a constant is a type of variable or not. The Prime
video treats them as distinct, but some websites seem to call them both types of variables.
I understand that a constant can't vary and a variable can, but some clarification would still be helpful!
let temp = 40;
const time = 4;

//FIX - need to replace || with && because || means the code runs if either is true and
// we want the code to run only if both are true, like && checks for.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
// FIX - minAge needs to be set as a variable, not a constant: should be let minAge = 21;
let age = 21;
const minAge = 21;

// FIX - need to change the console.log of the if statement to 'enter' and console.log
// of the else to 'no entry'. I don't know if this is strictly necessary, but I would also
// change the if check to age >= minAge to match better with the description. I believe as it
// is written it would still check it correctly, but it makes more sense to flip it if
// I as a human am trying to understand the end goal of the code.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
