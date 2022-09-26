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
    methods: PUT,
    path: '/books/{bookId}',
    handler: updateBookById,
  },
  {
    methods: DELETE,
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = routes;
