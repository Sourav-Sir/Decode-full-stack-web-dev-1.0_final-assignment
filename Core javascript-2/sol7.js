// Create a new map
const myMap = new Map();

// Add a key-value pair to the map
myMap.set('red', '#FF0000');
myMap.set('green', '#00FF00');
myMap.set('blue', '#0000FF');

// Check if a specific key exists
const keyToCheck = 'green';
if (myMap.has(keyToCheck)) {
    console.log(`The key '${keyToCheck}' exists in the map.`);
} else {
    console.log(`The key '${keyToCheck}' does not exist in the map.`);
}

// Retrieve a value associated with the 'green' key
const greenValue = myMap.get('green');
console.log(`The value associated with 'green' is: ${greenValue}`);

// Iterate through all key-value pairs
console.log('Iterating through all key-value pairs:');
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
