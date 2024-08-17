function calculateTotal({ price, quantity }) {
    return price * quantity;
}

// Example usage:
const item = { price: 50, quantity: 3 };
const totalCost = calculateTotal(item);
console.log(totalCost); // Output: 150
