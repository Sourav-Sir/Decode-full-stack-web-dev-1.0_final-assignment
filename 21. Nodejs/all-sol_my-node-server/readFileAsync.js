const fs = require('fs');

// Asynchronously read the file content
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('File reading initiated...');
