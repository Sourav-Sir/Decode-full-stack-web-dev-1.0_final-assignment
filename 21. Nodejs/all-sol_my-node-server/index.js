const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response HTTP header with status and content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Respond with "Hello World" for the root URL (/)
    if (req.url === '/') {
        res.end('Hello world!\n');
    } else {
        res.end('Not found\n');
    }
});

// Make the server listen on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
