const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/generate-comment", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v4/engines/davinci-codex/completions",
      {
        prompt: "Generate a professional comment for a LinkedIn post", // You may need to pass more specific prompts
        max_tokens: 60,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer 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`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ comment: response.data.choices[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating comment" });
  }
});

app.listen(3000, () => console.log("Server started on port 3000"));
