const fs = require('fs');

// Write a string to a new file
fs.writeFile('example.txt', 'This is the initial content.\n', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('Initial content written to file.');

    // Proceed to append additional text
    appendToFile();
});

// Function to append text to the file
function appendToFile() {
    fs.appendFile('example.txt', 'This is the appended content.\n', (err) => {
        if (err) {
            console.error('Error appending to the file:', err);
            return;
        }
        console.log('Additional content appended to file.');

        // Proceed to read and log the file contents
        readFileContents();
    });
}

// Function to read and log the file contents
function readFileContents() {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('File contents:');
        console.log(data);
    });
}