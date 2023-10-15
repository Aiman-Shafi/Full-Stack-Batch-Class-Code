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
    document.getElementById("warning-heading").innerHTML =
      "Twitter Count Reached!";
    notification();
  }

  if (linkedinCharactersLeft <= 0) {
    linkedinCounter.innerHTML = 0;
    document.getElementById("warning-heading").innerHTML =
      "Linkedin Count Reached!";
    notification();
  }
};

textAreaElement.addEventListener("input", wordCounterHandler);

let hasNotificationRun = false;

function notification() {
  if (hasNotificationRun) {
    return; // Exit the function if it has already run
  }
  document.querySelector(".warnings").style.display = "block";
  const warningsElement = document.querySelector(".warnings");
  warningsElement.classList.add("fade-in");

  setTimeout(() => {
    warningsElement.classList.remove("fade-in");
    warningsElement.classList.add("fade-out");

    // Optional: Remove the 'fade-out' class after animation completes
    setTimeout(() => {
      warningsElement.classList.remove("fade-out");
      document.querySelector(".warnings").style.display = "none";
    }, 500); // This duration should match the animation duration in CSS
  }, 5000);
  hasNotificationRun = true; // Set the flag to true after the function runs
}
