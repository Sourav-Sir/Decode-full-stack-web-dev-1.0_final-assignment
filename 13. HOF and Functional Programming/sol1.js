function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

// Example usage:

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error: Division by zero';
    }
}

// Test the calculate function
console.log(calculate(10, 5, add)); // Output: 15
console.log(calculate(10, 5, subtract)); // Output: 5
console.log(calculate(10, 5, multiply)); // Output: 50
console.log(calculate(10, 5, divide)); // Output: 2
