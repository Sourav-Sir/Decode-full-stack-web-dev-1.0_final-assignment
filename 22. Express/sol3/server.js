// server.js
const express = require('express');
const app = express();
const port = 3000;

// Import the authentication middleware
const checkAuth = require('./middleware/checkAuth');

// Middleware to parse JSON
app.use(express.json());

// Route: GET /
app.get('/', (req, res) => {
    res.send('Welcome to the main page!');
});

// Route: GET /dashboard (protected)
app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome to your dashboard!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
