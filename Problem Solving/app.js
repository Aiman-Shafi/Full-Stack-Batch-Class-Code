// Write a function called reverseString that takes a string as an argument and returns the string reversed.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("Problem Solving"));

// let word = "Javascript is one of the most popular programming language";
// let splitWord = word.split("").reverse().join("");

// splitWord.forEach((word) => console.log(word));

// console.log(splitWord);

// Create a function called extractDomain that takes an email address as a string and returns only the domain part.

// john@shopify.com
// aiman@wordpress.com

function extractDomain(email) {
  let atIndex = email.indexOf("@");
  return email.substring(atIndex + 1);
}

// console.log(extractDomain("kamrulislam@shopify.com"));

// Write a function called wordExists that takes two strings: a sentence and a word. The function should return true if the word exists in the sentence and false otherwise.

// let sentence = "Javascript Problem Solving";

// let wordExist = sentence.includes("Pblem");
// console.log(wordExist);

function wordExists(sentence, word) {
  let wordExist = sentence.includes(word);
  if (wordExist) {
    return `${word} is present in the sentence`;
  } else {
    return `not found`;
  }
}

// console.log(wordExists("Javascript Problem Solving", "Problem"));

// Get Words Longer Than N -> Create a function called getLongWords that takes a string and a number n. Return an array of words that are longer than n characters.

// "The quick brown fox jumps - Javascript" -> 6
// [quick, brown, jumps]
// [Javascript]

let newSentence = "Javascript is one of the most popular programming language";

let split = newSentence.split(" ").filter((word) => word.length > 4);
console.log(split);

function getLongWords(sentence, n = 2) {
  let split = sentence.split(" ").filter((word) => word.length === n);
  return split;
}

// console.log(
//   getLongWords("Javascript is one of the most popular programming language", 4)
// );

// let arr = [1, 3, 4, 5, 6, 7];

// arr.map((number) => console.log(number + " - new word"));
// arr.filter((item) => console.log(item > 4));

// Create a function called removeCharacter that takes a string and a character to remove. The function should return the string with all occurrences of the specified character removed.

// apple -> p -> ale

// let text = "apple is a fruit";
// let newSplit = text.split("f").join("");
// console.log(newSplit);

function removeCharacter(sentence, letter) {
  return (newSplit = sentence.split(letter).join(""));
}

// console.log(removeCharacter("apple", "p"));

// create a function to remove duplicate items from an array

let fruits = [
  "apple",
  "banana",
  "orange",
  "pineapple",
  "guava",
  "orange",
  "banana",
];

// console.log(fruits.indexOf("banana"));

let removeDuplicate = fruits.filter(
  (word, index) => fruits.indexOf("apple") === index
);

// console.log(removeDuplicate);

// function removeDuplicateItem(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicateItem(fruits));

//

let numbers = [1, 2, 3, 3, 4, 5, 5];

let uniqueNumbers = [];
let objects = {};

fruits.forEach(function (value) {
  if (!objects[value]) {
    uniqueNumbers.push(value);
    objects[value] = true;
  }
});

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
