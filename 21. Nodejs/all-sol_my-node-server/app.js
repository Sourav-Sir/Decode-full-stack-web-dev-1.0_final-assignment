// app.js

// Import the custom module
const calculateArea = require('./rectangle');

// Define dimensions of the rectangle
const width = 5;
const height = 10;

// Calculate and log the area
const area = calculateArea(width, height);
console.log(`The area of the rectangle is: ${area}`);
