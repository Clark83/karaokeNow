var express = require('express');
var app = express();
var request = require('request');
var logger = require('morgan');

// require("./controllers/routes.js")(app);

//logging middleware
app.use(logger('dev'));

app.post('/handleform', function(req,res) {
 //Do stuff with the form here
 console.log(req);
})


//var APP_DIR = '/root/deploy/Deployment/'
APP_DIR = process.env.APP_DIR || '/root/deploy/Deployment/'
console.log(APP_DIR)
app.use(express.static(APP_DIR))

app.listen(8080, function () {
 console.log('web server listening on port 8080')
})
