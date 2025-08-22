// api/news.js

const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY; // The API key from your environment variables
    const url = `https://newsapi.org/v2/everything?q=cambodia&apiKey=${apiKey}`;

    // Make the request to the News API
    const response = await axios.get(url);

    // Return the data as JSON
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
};
