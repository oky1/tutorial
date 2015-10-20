//oky1 okylich@tut.by
//NodeJs Server

//Initialize our Express Web framework
var express = require("express");
var app = express();

//native NodeJs module for resolving paths
var path = require("path")

//get our port # from c 9's enviromental variable: PORT
var port = process.env.PORT;

//Set our view engine to EJS, and set directory our views will be stored in
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

//set our first route
app.get('/', function(req, res){
    res.render('index.ejs');
});

//make our app listen for incoming requests on the port assigned above
app.listen(port, function(){
    console.log('SERVER RUNNING... PORT: ' + port)
});
