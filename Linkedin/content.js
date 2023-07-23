document.addEventListener("DOMContentLoaded", (event) => {
  // Your code here
  function createButton() {
    let button = document.createElement("button");
    button.innerHTML = "Auto Comment Generator";
    button.onclick = function () {
      // Here we will interact with our server to generate a comment
      chrome.runtime.sendMessage(
        { message: "generate_comment" },
        function (response) {
          // Put the comment in the text box
          let commentBox = document.querySelector(
            ".comments-comment-box-comment__text-editor"
          ); // Replace with the actual comment box selector
          commentBox.value = response.comment;
        }
      );
    };
    let postContainer = document.querySelector(".comments-comment-texteditor"); // Replace with the actual post container selector
    postContainer.appendChild(button);
  }

  // Call the createButton function when the LinkedIn page loads
  window.onload = createButton;
});
