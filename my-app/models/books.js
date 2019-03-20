/* eslint-disable linebreak-style */

// Require mongoose
const mongoose = require('mongoose');
// Create a schema class
const { Schema } = mongoose;

// Create the Book schema
const BookSchema = new Schema({
  body: {
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
});

// Create the model
const Book = mongoose.model('Book', BookSchema);

// Export
module.exports = Book;
