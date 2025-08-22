// netlify/functions/news.js
const axios = require('axios');
require('dotenv').config();  // To load environment variables like your NewsAPI key

exports.handler = async (event, context) => {
  const apiKey = process.env.NEWS_API_KEY;  // Get your API key from .env file
  const url = `https://newsapi.org/v2/everything?q=cambodia&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);  // Fetch news from NewsAPI
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),  // Return the data as JSON
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching news' }),
    };
  }
};
