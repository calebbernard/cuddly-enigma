var request = require('request'); 
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/', function(req,res){
	res.render('page1')
});

app.get('/page1', function(req,res){
	res.render('page1')
});

app.get('/page2', function(req,res){
	res.render('page2')
});

app.get('/page3', function(req,res){
    res.render('page3')
});

app.get('/page4', function(req,res){
    res.render('page4')
});

app.get('/page5', function(req,res){
    res.render('page5')
});

app.get('/page6', function(req,res){
    res.render('page6')
});

app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});


app.listen(app.get('port'), function(){
	console.log('Express started at port ' + app.get('port') + '; press Ctrl+C to terminate.');
});
