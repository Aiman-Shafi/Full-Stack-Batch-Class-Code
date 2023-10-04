// Array

let fruits = ["apple", "mango", "lichi", "banana", 10, 20, 30, 50, true, false];

console.log(fruits.length); // length of an array
console.log(fruits[3]); // finding the value using index
console.log(fruits[1]);
console.log(fruits.indexOf("lichi")); // find index of an item using value
console.log(fruits);

// Array Methods
fruits.pop(); // remove an last item from an array
fruits.shift(); // remove an first item from an array
fruits.push("strawberry"); // add an item to the array at the end
fruits.unshift("berries"); // add item to the first
console.log(fruits);

// joining an array

let arr1 = ["lichi", "orange"];
let arr2 = ["apple"];

let newArr = arr1.concat(arr2); //
console.log(newArr);

// slicing an array

let animals = ["tiger", "snake", "cat", "dog", "duck", "bird"];
console.log(animals);
let newAnimals = animals.slice(-3);
// let newAnimals = animals.slice(2, 4);
console.log(newAnimals);

// splice (startIndex, deleteCount, item....) - changes the original array

let animalType = [1, 2, 4, 10, 20, 40, 23, 44, 56, "cat", "dog", "bird"];
// console.log(animalType);
// animalType.splice(3, 0, "aiman", "sujon");

// console.log(animalType);

// sorting & reverse

// let animalSort = animalType.sort((a, b) => a - b);
// console.log(animalSort.reverse());

let users = [
  { name: "Amit", age: 25 },
  { name: "Sujon", age: 45 },
  { name: "Jamal", age: 28 },
  { name: "Mamun", age: 34 },
  { name: "Hosain", age: 16 },
];
// console.log(users.sort((a, b) => a.age - b.age));

// array iteration

// users.forEach((x) => console.log(x));
// animals.forEach((animal) => console.log(animal));

// for loop & forEach

animals = ["tiger", "snake", "cat", "dog", "duck", "bird"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

users.forEach((user) => console.log(user.name, user.age));

// Map

animals.map((animal) => console.log(animal));

// filter

let numList = [10, 20, 3, 9, 7, 33, 44, 24];

let evenNumber = numList.filter((number) => number % 2 === 0);
let filterUser = users.filter((user) => user.age > 30);

console.log(filterUser);

// Includes

let searchUser = animals.includes("bird");

console.log(searchUser);
