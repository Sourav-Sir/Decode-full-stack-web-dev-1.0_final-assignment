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

    // Check if profile with the same id already exists
    const existingProfile = profiles.find(profile => profile.id === id);
    if (existingProfile) {
        return res.status(400).json({ error: 'Profile with this ID already exists' });
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

// PUT /profiles/:id endpoint
app.put('/profiles/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    // Find the profile to update
    const profileIndex = profiles.findIndex(profile => profile.id === parseInt(id));
    if (profileIndex === -1) {
        return res.status(404).json({ error: 'Profile not found' });
    }

    // Update the profile
    profiles[profileIndex] = { id: parseInt(id), name, email, age };

    // Return the updated profile
    res.json(profiles[profileIndex]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
