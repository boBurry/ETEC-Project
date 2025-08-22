// server.js
const http = require('http');
const axios = require('axios');
require('dotenv').config();  // Load your environment variables (like the API key)

const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/everything?q=cambodia&apiKey=${apiKey}`;

http.createServer((req, res) => {
  if (req.url === '/api/news') {
    axios.get(url)
      .then(response => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response.data));
      })
      .catch(error => {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Error fetching news' }));
      });
  }
}).listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
