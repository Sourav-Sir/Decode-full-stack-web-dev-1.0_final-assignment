function multiplyAddSum(...numbers) {
    if (numbers.length < 2) {
        throw new Error('At least two arguments are required.');
    }

    const [first, second, ...rest] = numbers;
    const product = first * second;
    const sumOfRest = rest.reduce((acc, num) => acc + num, 0);

    return product + sumOfRest;
}

// Example usage:
console.log(multiplyAddSum(2, 3, 4, 5)); // Output: 11 (2 * 3 + 4 + 5)
console.log(multiplyAddSum(1, 10, 20, 30)); // Output: 60 (1 * 10 + 20 + 30)
console.log(multiplyAddSum(5, 5)); // Output: 25 (5 * 5 + 0)
