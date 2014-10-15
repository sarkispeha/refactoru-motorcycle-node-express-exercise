
// This file ties everything together

var express = require('express'); // This allows you to use express
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express(); // Calling express so you can use it
app.set('view engine', 'jade'); // Use Jade for your views
app.set('views', __dirname + '/views'); 
app.use(bodyParser.urlencoded({extended: false})); 

// Routing For The Homepage
app.get('/', indexController.index);

// Routing for the Chile Page
app.get('/chile', indexController.chile);

// Routing for the Peru Page
app.get('/peru', indexController.peru);

// Routing for the Colombia Page
app.get('/colombia', indexController.colombia);

// Routing for the Venezuela Page
app.get('/venezuela', indexController.venezuela);

// Routing for the USA Page
app.get('/usa', indexController.usa);


var server = app.listen(9691, function() {
	console.log('Express server listening on port ' + server.address().port);
});

/*

app.route('/')
	.get('/chile', indexController.chile);
	.get('/peru', indexController.peru);
	.get('/colombia', indexController.colombia);
	

*/
