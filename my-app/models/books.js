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
    type: String,
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
});

// Create the model
const Book = mongoose.model('Book', BookSchema);

// Export
module.exports = Book;