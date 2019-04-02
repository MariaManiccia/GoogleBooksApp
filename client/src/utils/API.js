/* eslint-disable linebreak-style */
import axios from 'axios';

export default {
  // Gets books from the Google API
  getBooks(q) {
    return axios.get('/api/google', { params: { q: 'title:' + q } });
  },
  // Gets all saved books
  getSavedBooks() {
    return axios.get('/api/books');
  },
  // Deletes saved books
  deleteBook(id) {
    return axios.delete('/api/books/' + id);
  },
  // Saves a book
  saveBook(bookData) {
    return axios.post('/api/books', bookData);
  },
};
