var express = require("express");
var app = express();


/******************************************* */
/***Server Configuration */
/******************************************* */

// render HTML frm the endpoints
var ejs = require('ejs');
app.set('views', __dirname + "/public");
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);

//server static file (css, js, img, pdf)
app.use(express.static(__dirname + '/public'));
//wwwroot -- be careful what you place online

/******************************************* */
/***Server HTML */
/******************************************* */

app.get('/', function(req, res){
    res.render('index.html');
});

// create the /admin endpoint
//server the admin.html
app.get('/admin', function(req,res){
    res.render('admin.html');
});

app.get('/about', function(req, res){
    res.send('<h1 style="color:red">Gerry Squirewell</h1>');
});

app.get('/contact', function(req, res){
    res.send('<h2 style="color:blue">contact us at: gasquirewell@gmail.com</h2>');
});

//start project
app.listen(8080, function(){
    console.log("Server running at localhost:8080");
});

//Ctrl + c: to kill server

//ERROR CODES
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// https://www.restapitutorial.com/httpstatuscodes.html
