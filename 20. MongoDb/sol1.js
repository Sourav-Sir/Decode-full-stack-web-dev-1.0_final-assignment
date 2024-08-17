// 3. Creating a Simple Schema for a Blog Post

const mongoose = require('mongoose');

// Define the schema
const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // This field is required
    },
    author: {
        type: String,
        required: true, // This field is required
    },
    content: {
        type: String,
        required: true, // This field is required
    },
    tags: {
        type: [String], // This field is an array of strings
    },
    createdAt: {
        type: Date,
        default: Date.now, // Default value is the current date and time
    },
});

// Compile the schema into a model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Now you can use the BlogPost model to create, read, update, and delete blog posts in your MongoDB collection.

// Explanation:
// title, author, content: These are required fields of type String. The required: true validation ensures that a document cannot be saved without these fields.
// tags: This is an optional field that stores an array of strings.
// createdAt: This field is of type Date and defaults to the current date and time when a document is created.
// By defining this schema, Mongoose will enforce that all blog post documents adhere to this structure when interacting with the MongoDB collection through the BlogPost model.