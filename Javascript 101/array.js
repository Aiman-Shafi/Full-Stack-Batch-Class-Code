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
