// api/news.js

const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY; // Ensure your API key is available in environment variables
    const url = `https://newsapi.org/v2/everything?q=cambodia&apiKey=${apiKey}`;

    // Make the request to NewsAPI
    const response = await axios.get(url);

    // Return the response data as JSON to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news" });
  }
};
