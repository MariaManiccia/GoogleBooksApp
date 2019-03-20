/* eslint-disable linebreak-style */

// Require mongoose
const mongoose = require('mongoose');
// Create a schema class
const { Schema } = mongoose;

// Create the Book schema
// title - Title of the book from the Google Books API
// authors - The books's author(s) as returned from the Google Books API
// description - The book's description as returned from the Google Books API
// image - The Book's thumbnail image as returned from the Google Books API
// link - The Book's information link as returned from the Google Books API
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
});

// Create the model
const Book = mongoose.model('Book', BookSchema);

// Export
module.exports = Book;