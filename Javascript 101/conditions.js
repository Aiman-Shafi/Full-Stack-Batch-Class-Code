let isDarkMode = false;

if (isDarkMode == true) {
  console.log("Dark Mode is enabled!!");
} else {
  console.log("Dark Mode is disabled!");
}

let isRaining = true;

if (isRaining == false) {
  console.log("It's not raining!");
} else {
  console.log("it's raining");
}

if (2 < 1) {
  console.log(true);
} else {
  console.log(false);
}

// if (age > 35) {
//   console.log(`is `);
// }

// let sentence = `${person} is ${age} years old!
// Hi there, Hello...
// `;
// console.log(sentence);

// age is greater or equal to 18 => adult
// age is less than 18 => child
// age is greater or equal to 40 => Old

let age = 50;
let person = "Liton";

if (age >= 40) {
  console.log(`${person} is an Old guy`);
} else if (age >= 18) {
  console.log(`${person} is an Adult`);
} else {
  console.log("Child");
}

// else {
//     console.log(`${person} is a Child`);
//   }

// temp -> 30 < -> "hot"
// temp -> = 30 -> "normal"
// temp -> <= 22 -> "cold"

let temperature = 32;

if (temperature > 30) {
  console.log("Weather is HOT");
} else if (temperature <= 22) {
  console.log("Weather is COLD");
} else {
  console.log("Weather is Normal!");
}

// Course -> Math, English , Science
// Find out the average marks of 3 courses
// Find the actual grade
// 90 -> A+
// 80 -> A
// 60 -> B+
// 50 -> C
// 40 -> D
// Below 40 IS FAIL!

let mathMarks = 95;
let englishMarks = 95;
let scienceMarks = 0;

const averageMarks = (mathMarks + englishMarks + scienceMarks) / 3;
let toFixed = averageMarks.toFixed(2);
console.log("Average Marks: ", parseFloat(toFixed));

if (averageMarks >= 90) {
  console.log("Result is A+");
} else if (averageMarks >= 80) {
  console.log("Result is A");
} else if (averageMarks >= 60) {
  console.log("Result is B+");
} else if (averageMarks >= 50) {
  console.log("Result is C");
} else if (averageMarks >= 40) {
  console.log("Result is D");
} else {
  console.log("Failed!");
}
