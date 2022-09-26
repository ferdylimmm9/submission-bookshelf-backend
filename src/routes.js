const {
  addBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require('./handler');

const { DELETE, GET, POST, PUT } = require('./methods');

const routes = [
  {
    method: POST,
    path: '/books',
    handler: addBook,
  },
  {
    method: GET,
    path: '/books',
    handler: getBooks,
  },
  {
    method: GET,
    path: '/books/{bookId}',
    handler: getBookById,
  },
  {
    method: PUT,
    path: '/books/{bookId}',
    handler: updateBookById,
  },
  {
    method: DELETE,
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = routes;
