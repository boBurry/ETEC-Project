// api/news.js
const axios = require('axios');
require('dotenv').config();  // To load environment variables like your NewsAPI key

module.exports = async (req, res) => {
  const apiKey = process.env.NEWS_API_KEY;  // Get the NewsAPI key from environment variables
  const url = `https://newsapi.org/v2/everything?q=cambodia&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);  // Fetch news from NewsAPI
    res.json(response.data);               // Send the data back as JSON
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Error fetching news' });
  }
};
