function counter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
}

// Example usage:
const myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); // Output: 2

const anotherCounter = counter();
console.log(anotherCounter.getCount()); // Output: 0 (separate instance)
