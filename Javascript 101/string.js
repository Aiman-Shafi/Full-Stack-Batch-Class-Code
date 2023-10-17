// console.log("test");

let stringValue = "";
let nameOfUser = "Abdullah   ";
let sentence = "Bangladesh is a highly populated country";

console.log("length of user:", nameOfUser.length); // 11 (with space)
console.log("length of user:", sentence.length); // 40

// Make a new string (add two string) - Concat

let greeting = "Good Night!";
let newGreeting = greeting.concat(", Abdullah");

let firstName = "WP";
let lastName = "Sujon";
console.log(firstName + " " + lastName); // WP Sujon
console.log(newGreeting); // Good Night!, Abdullah

// subString - take a portion of a string

let newSentece = sentence.substring(1, 10);
console.log(newSentece);

// slice -  take a portion of a string (it takes negative value as well)

let slice = sentence.slice(-20, -3);
console.log(slice);

let blogPost =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet saepe sint hic suscipit velit quia eius eaque molestiae cupiditate perspiciatis, accusamus sit earum veniam maiores aspernatur fugit? Beatae, sint dignissimos ratione iste voluptatum aliquid illum. Id, ullam officiis. Iusto, impedit.";

console.log(blogPost.slice(0, 75) + "..."); //Result: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet saepe sint hi...

// charAt(index) -> (search a letter from a string)

let word = "Coffee";
let searchLetter = word.charAt(5); // e
console.log(searchLetter);

// indexOf(string) // -1 -> not found!

let newSentence = "I love to drink coffee!";
let searchWord = newSentence.indexOf("drink");
console.log(searchWord);

// includes(string) // do string contains a substring

let includes = newSentence.includes("coffee");
console.log(includes); // true or false

// Case Changing

let lowerCase = "Hello, my NAME is Blob!";
console.log(lowerCase.toLowerCase()); // return everything in small letters

let upperCase = "Hello, my name is blob!";
console.log(upperCase.toUpperCase()); // return everything in capital letters

// trim -> removes spaces from a string

let untidy = "     How are you ?   ";
console.log(untidy.trim()); // removes all space from start and end!

// find if the word "hello" is present in the sentence!

let givenSentence = "Hello, how is Bob doing today? :)";
let lowerCaseGivenSentence = givenSentence.toLowerCase();
let searchFor = "Doing";
let searchForToLowercase = searchFor.toLowerCase();

// if (lowerCaseGivenSentence.includes(searchForToLowercase)) {
//   console.log(searchFor, "is found! Yaaay");
// } else {
//   console.log("Oppss,", searchFor, "is not found!");
// }

// if (givenSentence.toLowerCase().includes(searchFor.toLowerCase())) {
//   console.log("found!");
// }

// if (lowerCaseGivenSentence.indexOf(searchForToLowercase) !== -1) {
//   console.log(searchFor, "is Found");
// } else {
//   console.log(searchFor, "is not Found");
// }

console.log(lowerCaseGivenSentence.indexOf("bab"));

// console.log(givenSentence.indexOf(searchFor));

// let age = "10";

// 0, null, undefined , NaN, false

// if (age) {
//   console.log("age is true");
// } else {
//   console.log("age is false");
// }
