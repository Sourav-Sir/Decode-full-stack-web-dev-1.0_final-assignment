// app.js
const mongoose = require('mongoose');
const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');

// Enable Mongoose debugging
mongoose.set('debug', true);

// Connect to MongoDB with increased timeout
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Test function
async function testEcommerceApp() {
    try {
        // 1. Create a new user
        const user = new User({
            name: 'Jane Smith',
            email: 'jane@example.com',
            password: 'mypassword123',
            address: {
                street: '456 Another St',
                city: 'San Francisco',
                state: 'CA',
                zip: '94103',
                country: 'USA',
            },
        });
        await user.save();
        console.log('User created:', user);

        // 2. Create a new product
        const product = new Product({
            name: 'Smartphone',
            description: 'A latest model smartphone',
            price: 999,
            stock: 100,
        });
        await product.save();
        console.log('Product created:', product);

        // 3. Create a new order
        const order = new Order({
            user: user._id,
            products: [{
                product: product._id,
                quantity: 1,
            }],
            totalAmount: 999,
        });
        await order.save();
        console.log('Order created:', order);

        // 4. Fetch and populate the order
        const fetchedOrder = await Order.findById(order._id)
            .populate('user')
            .populate('products.product')
            .exec();
        console.log('Fetched Order:', fetchedOrder);

    } catch (err) {
        console.error('Error during testing:', err);
    } finally {
        mongoose.connection.close();
    }
}

// Run the test
testEcommerceApp();
