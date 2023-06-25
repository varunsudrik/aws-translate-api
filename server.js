const express = require("express");
const AWS = require("aws-sdk");

const app = express();
require("dotenv").config();

app.use(express.json());

// AWS configuration
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const translate = new AWS.Translate();

app.post("/translate", async (req, res) => {
  const { sourceLanguage, targetLanguage, text } = req.body;

  const params = {
    SourceLanguageCode: sourceLanguage,
    TargetLanguageCode: targetLanguage,
    Text: text,
  };

  try {
    const translation = await translate.translateText(params).promise();
    res.json(translation.TranslatedText);
  } catch (error) {
    res.status(500).json({ error: "Error translating text" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
