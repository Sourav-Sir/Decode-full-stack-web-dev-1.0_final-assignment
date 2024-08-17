function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        } else {
            return sum;
        }
    }, 0);
}

// Example usage:
const myArray = [1, 2, 3, 4, 5, 6];
const sumOfEvens = sumEvenNumbers(myArray);
console.log(sumOfEvens); // Output: 12
