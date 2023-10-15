// No. of word count
// No. characters count
// Limit -> linkedin & twitter
// warning for some tags or keywords

// selectors

const textAreaElement = document.querySelector(".word-counter-textarea");
const wordCounter = document.querySelector(".words");
const characterCounter = document.querySelector(".characters");
const twitterCounter = document.querySelector(".twitter");
const linkedinCounter = document.querySelector(".linkedin");

const invalidWordsList = ["payment", "list", "script"];

const wordCounterHandler = () => {
  // input validation

  invalidWordsList.forEach((word) => {
    if (textAreaElement.value.includes(word)) {
      alert(`you cannot provide any ${word} here!`);
      textAreaElement.value = textAreaElement.value.replace(word, "");
    }
  });

  // setting number of characters
  let numberOfCharacters = textAreaElement.value.length;
  characterCounter.innerHTML = numberOfCharacters;
  // determine number of words
  let numberOfWords = textAreaElement.value.split(" ").length;
  if (textAreaElement.value.length === 0) {
    numberOfWords = 0;
  }
  wordCounter.innerHTML = numberOfWords;

  // twitter counter limit set
  let twitterCharactersLeft = 250 - numberOfCharacters;
  twitterCounter.innerHTML = twitterCharactersLeft;

  // twitter counter limit set
  let linkedinCharactersLeft = 320 - numberOfCharacters;
  linkedinCounter.innerHTML = linkedinCharactersLeft;

  if (twitterCharactersLeft <= 0) {
    twitterCounter.innerHTML = 0;
    document.querySelector(".warnings").style.display = "block";
    document.getElementById("warning-heading").innerHTML =
      "Twitter Count Reached!";
    notification();
  }

  if (linkedinCharactersLeft <= 0) {
    linkedinCounter.innerHTML = 0;
    document.querySelector(".warnings").style.display = "block";
    document.getElementById("warning-heading").innerHTML =
      "Linkedin Count Reached!";
    notification();
  }
};

textAreaElement.addEventListener("input", wordCounterHandler);

function notification() {
  setTimeout(() => {
    document.querySelector(".warnings").style.display = "none";
  }, 5000);
}
