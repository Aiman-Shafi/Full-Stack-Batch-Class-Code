let roundNumber = 53; // 1,2,34,5,45,  round number / natural number / integer number
let decimalNumber = 34.77774555; // floating point number or Decimal

let addition = roundNumber + decimalNumber;
// console.log("Result:", addition);

console.log("To Fixed:", addition.toFixed(3));
console.log("Integer:", parseInt(addition)); // convert a number to an integer

// let toFixed = averageMarks.toFixed(2);
// console.log("Average Marks: ", parseFloat(toFixed));

let newNumber = 96.96;

let newRoundNumber = Math.round(newNumber);
console.log("Round Number:", Math.round(newRoundNumber)); // convert a number to a Round number (.5 er upore gele next value chole ashbe -> 13.5 -> 14)

let ceilNumber = Math.ceil(newNumber);
console.log("Ceil", ceilNumber);
// whatever the decimal value is the result will always be on the upper level. 14.23 -> 15

let floorNumber = Math.floor(newNumber);
console.log("Floor Number:", floorNumber); // doesn't take the upper value how higher the decimal value is!

let negativeNumber = -67;
let absNumber = Math.abs(negativeNumber); // turns negative number into positive value
console.log(absNumber);

let number = "45.54";
console.log(typeof number);
console.log(parseInt(number));
console.log(parseFloat(number));

// DICE ROLL -> 1 - 6

let randomNumber = parseInt(Math.random() * 900 + 100); // 0 to 1 -> value
console.log("Roll a dice:", randomNumber);
