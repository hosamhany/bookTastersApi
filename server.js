var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');


var bookTastersController = require('./api/controllers/booktastersController');
app.get('/', function (req, res) {
  res.send('Book Tasters Home Page')
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/booktastersRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
