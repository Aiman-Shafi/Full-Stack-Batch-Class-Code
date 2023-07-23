chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "generate_comment") {
    fetch("http://yourserver.com/generate-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Pass the necessary data to your server
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Send back the generated comment to the content script
        sendResponse({ comment: data.comment });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    return true; // Keeps the message channel open until sendResponse is called
  }
});
