// Import Express
const express = require('express');
const app = express();
const port = 3000; // Port number for the server

// Middleware to handle JSON requests
app.use(express.json());

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Route for the about page
app.get('/about', (req, res) => {
    res.send('This is a basic Express.js server with multiple routes. It demonstrates how to set up routes and handle JSON data.');
});

// Route for the API users endpoint
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
    ];
    res.json(users);
});

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Testing the Routes
// Home Route:

// Visit http://localhost:3000 to see the "Hello world!" message.
// About Route:

// Visit http://localhost:3000/about to see information about the application.
// Users API:

// Visit http://localhost:3000/api/users to see the mock JSON data for users.
// Error Handling:

// Try accessing a non-existent route, like http://localhost:3000/nonexistent, to see the "404 - Not Found" message.