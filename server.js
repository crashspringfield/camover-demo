// Dependencies
var bodyParser  = require('body-parser');
var express     = require('express');

// Set up app
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/cameras', express.static(__dirname + '/cameras'));

// Endpoints
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// Listener
app.listen(PORT, function() {
  console.log('Server running on port ' + PORT);
});
