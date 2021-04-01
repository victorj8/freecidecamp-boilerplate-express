var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));


app.get(
    '/json',
    function(req, res){
        res.json({"message": "Hello json"});
    }
);

app.get(
    '/',
    function(req, res){
        res.sendFile(__dirname + '/views/index.html');
    }
)


































 module.exports = app;
