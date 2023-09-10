// Javascript Loop

// 1 - 100

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(5);
// console.log(100);

// ODD NUMBER -> 1,3,5,7,9,13,15,19,21,23,27,29 -> 2 diye vagg kora jabe naa!!!

// EVEN NUMBER -> 12,10,8,20,100,46,68,18 -> divisible by 2 (2 diye vaag kora jabe)

for (let count = 10; count <= 30; count++) {
  //   console.log(count);
  if (count % 2 !== 0) {
    console.log("odd number", count);
  }
}

for (let count = 1; count <= 20; count++) {
  //   console.log(count);
  if (count % 2 === 0) {
    console.log("even number", count);
  }
}

let number = 3;
// == -> checks only the value
// === -> checks both type and value

// if (number === "3") {
//   console.log("number is 3");
// } else {
//   console.log("no number found!");
// }

// while loop

// let newValue = 10;

// while (newValue <= 20) {
//   console.log(newValue);
//   newValue++;
// }
