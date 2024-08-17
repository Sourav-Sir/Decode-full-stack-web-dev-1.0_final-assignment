// Ascending Order
let i = 1;
let ascendingOrder = "";

while (i <= 25) {
    ascendingOrder += i;
    if (i < 25) {
        ascendingOrder += ", ";
    }
    i++;
}

console.log("Numbers in Ascending Order:");
console.log(ascendingOrder);

// Line break between outputs
console.log("\n-------------------------\n");

// Descending Order
let j = 25;
let descendingOrder = "";

while (j >= 1) {
    descendingOrder += j;
    if (j > 1) {
        descendingOrder += ", ";
    }
    j--;
}

console.log("Numbers in Descending Order:");
console.log(descendingOrder);
