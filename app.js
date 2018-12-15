var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
// congigure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// use middlewire
app.use(bodyParser());
// define routes
app.use(require('./routes/todo'));
// start the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('ready on port'+  port);
});	