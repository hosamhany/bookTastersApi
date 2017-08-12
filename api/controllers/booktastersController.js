'use strict';

var books = require('google-books-search');

exports.getBookByName = function(req, res) {
  books.search(req.params.bookName, function(error, results) {
    if ( ! error ) {
      res.send(results)
    } else {
      res.send(error)
    }
  });

};
exports.getBookById = function(req, res){
  books.lookup(req.params.bookId, function(error, result)
  {
    if(!error)
    {
      res.send(result)
    }
    else{
      res.send(error)
    }
  });
}
