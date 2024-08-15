// Initial shopping cart
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Function to update the shopping cart
function updateShoppingCart(cart, allergicToHoney) {
    // Add 'Meat' to the beginning if not already added
    if (!cart.includes('Meat')) {
        cart.unshift('Meat');
    }

    // Add 'Sugar' to the end if not already added
    if (!cart.includes('Sugar')) {
        cart.push('Sugar');
    }

    // Modify 'Tea' to 'Green Tea' if allergic to honey
    if (allergicToHoney) {
        const teaIndex = cart.indexOf('Tea');
        if (teaIndex !== -1) {
            cart[teaIndex] = 'Green Tea';
        }
    }

    return cart;
}

// Example usage: Assume we are allergic to honey
const updatedCart = updateShoppingCart(shoppingCart, true);
console.log(updatedCart);
