var express = require('express');
var bodyParser = require('body-parser');
const path = require('path')
const SERVER_PORT = 8080;
var app = express();
const api = require('./server/routes/api');
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-method", "*") 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  */
app.use('/', api)
app.use(express.static('public'))
app.use(express.static('node_modules'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(SERVER_PORT);



