// LOGICAL OPERATOR

// AND (&&) & OR (||)

// example with boolean

// OR (||)

// console.log(true || false || true); // true
// console.log(false || true || false || false); // true
// console.log(false || false || false); // false

// AND (&&)

// console.log(true && true && false && true);
// console.log(true && false);
// console.log(false && true);
// console.log(true && true);

// let person = "nadims";
// // let age = 41;
// let isMarried = true;

// if (person === "nadim" || age === 40 || isMarried === true) {
//   console.log("he can enter the room!");
// } else {
//   console.log("incorrect user");
// }

// if (person === "nadims" && age === 40 && isMarried === true) {
//   console.log("he can enter the room!");
// } else {
//   console.log("incorrect user");
// }

// Destruturing

const users = ["Jamal", "Kamal", "Sobuj"];

// Without Destruturing
// console.log(users[0]);
// console.log(users[2]);

// With Destruturing
const [userJamal, userKamal, userSobuj] = users;

console.log(userJamal);
console.log(userSobuj);

const newPerson = {
  name: "Rahim",
  age: 25,
  isMarried: true,
  canDrive: true,
  country: "Bangladesh",
};

// console.log(newPerson.age);
// Without Destruturing

// let age = newPerson.age;
// // let name = newPerson.name;
// let drive = newPerson.canDrive;

// console.log(name, age, drive);

// Destruturing

const { country, age, name } = newPerson;

console.log(country, age, name);

function Person({ name, age }) {
  console.log(`My name is ${name} and age is ${age}`);
}

Person(newPerson);

// Speard Operator

const groupOne = [1, 4, 5];
const groupTwo = [2, 5, 7];

const combineGroup = groupOne.concat(groupTwo);
console.log(combineGroup);

const newArr = [...groupOne, ...groupTwo];

console.log(newArr);

// function

function sum(x, y, z) {
  console.log(x + y + z);
}

sum(...groupOne);
sum(...groupTwo);

let allUsers = { ...newPerson };
console.log(allUsers);

async function fetchApi() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    data.map((post) => console.log(post.title));
  } catch (error) {
    console.error("We are having an error while fetching data", error);
  }
}

fetchApi();
