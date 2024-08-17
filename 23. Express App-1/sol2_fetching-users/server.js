const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory store for user profiles
let profiles = [];

// POST /profiles endpoint
app.post('/profiles', (req, res) => {
    const { id, name, email, age } = req.body;

    // Basic validation
    if (!id || !name || !email || !age) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new profile
    const newProfile = { id, name, email, age };

    // Store the profile
    profiles.push(newProfile);

    // Return the created profile
    res.status(201).json(newProfile);
});

// GET /profiles endpoint
app.get('/profiles', (req, res) => {
    // Return all profiles
    res.json(profiles);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
