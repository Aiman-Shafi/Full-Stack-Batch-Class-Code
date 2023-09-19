// write a for loop where it prints 1 to 10
// write a for loop where it prints 20 to 50

for (let count = 10; count <= 30; count++) {
  //   console.log(count);
}

for (let count = 40; count <= 100; count++) {
  //   console.log(count);
}

// ... continue ...

// writing our first Function
// let count;
// count = 40;

function forLoop(countStart = 0, countEnd = 10) {
  //   console.log("First Value:", 10);
  for (let count = countStart; count <= countEnd; count++) {
    console.log("For Loop", count);
  }
}

// forLoop();

// argument
// forLoop(10, 20); // argument
// forLoop(100, 300); // argument

// write a function that prints out your name

function userNameGenerator(firstName = "MD. ", lastName, age) {
  console.log(`User Name is ${firstName} ${lastName}and his age is ${age}`);
}

// let myName = "Tamim";
// let age = 50;
// console.log("Hello my name is " + myName + " & his age is", age);

// console.log(`${myName} is an international cricketer`);
// template literals

userNameGenerator("MD.", "Sujon", 40);
userNameGenerator("Md", "Jamal", 50);
userNameGenerator("Shakib", "Al Hasan", 60);
// userNameGenerator();
// userNameGenerator();

// let temperature = 32;

// if (temperature > 30) {
//   console.log("Weather is HOT");
// } else if (temperature <= 22) {
//   console.log("Weather is COLD");
// } else {
//   console.log("Weather is Normal!");
// }

function temperatureCount(temperature) {
  if (temperature > 40) {
    console.log("Weather is Extreme Hot!");
  } else if (temperature > 30) {
    console.log("Weather is somewhat Hot!");
  } else if (temperature <= 22) {
    console.log("Weather is COLD");
  } else {
    console.log("Weather is normal!");
  }
}

temperatureCount(21);

// DICE ROLL -> 1 - 6

// let randomNumber = parseInt(Math.random() * 900 + 100); // 0 to 1 -> value
// console.log("Roll a dice:", randomNumber);
let randomNumber;

function randomDice() {
  randomNumber = parseInt(Math.random() * 6 + 1); // 1 to 6 -> value
  console.log("Roll a dice:", randomNumber);
}

// console.log(newNumber);

randomDice();

// let mathMarks = 95;
// let englishMarks = 95;
// let scienceMarks = 0;

// const averageMarks = (mathMarks + englishMarks + scienceMarks) / 3;
// let toFixed = averageMarks.toFixed(2);
// console.log("Average Marks: ", parseFloat(toFixed));

// if (averageMarks >= 90) {
//   console.log("Result is A+");
// } else if (averageMarks >= 80) {
//   console.log("Result is A");
// } else if (averageMarks >= 60) {
//   console.log("Result is B+");
// } else if (averageMarks >= 50) {
//   console.log("Result is C");
// } else if (averageMarks >= 40) {
//   console.log("Result is D");
// } else {
//   console.log("Failed!");
// }

function averageGrading(mathMarks = 0, englishMarks = 0, scienceMarks = 0) {
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
}

averageGrading(50, 60, 90);

// find the max between two numbers

// let num1 = 10;
// let num2 = 20;

// if (num1 > num2) {
//   console.log(num1, "is greater");
// } else {
//   console.log(num2, "is greater");
// }

function add(num1, num2) {
  //   console.log("ADD:", num1 + num2);
  return num1 + num2;
}

// add(10, 20);

// console.log(add(10, 20));

let addition = add(20, 40);
// console.log(addition);
