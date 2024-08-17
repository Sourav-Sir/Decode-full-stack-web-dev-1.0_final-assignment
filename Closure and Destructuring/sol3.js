let myArray = [1, 2, 3];

function addToMyArray(...newElements) {
    myArray = [...myArray, ...newElements];
}

// Example usage:
addToMyArray(4, 5, 6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

addToMyArray(7, 8);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
