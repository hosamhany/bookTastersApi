module.exports = function(app){
var bookTastersController = require('../controllers/booktastersController');

//routes
app.route('/:bookName')
  .get(bookTastersController.getBookByName);
app.route('/:bookId')
  .get(bookTastersController.getBookById);
}
