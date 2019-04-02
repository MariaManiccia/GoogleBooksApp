import axios from 'axios';

export default {
  // Gets books
  getBooks(q) {
    return axios.get('/api/google', { params: { q: 'title:' + q } });
  },
  // Saved books
  getSavedBooks() {
    return axios.get('/api/books');
  },
  // Deletes the saved book
  deleteBook(id) {
    return axios.delete('/api/books/' + id);
  },
  // Saves the book
  saveBook(bookData) {
    return axios.post('/api/books', bookData);
  },
};
