var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
const dotenv = require('dotenv');
dotenv.config();


app.get(
    '/json',
    function(req, res){
        if(process.env.MESSAGE_STYLE === "uppercase"){
            res.json({
            "message" : "HELLO JSON"
            })
            }
        res.json({"message" : "Hello json"});        
    }
);

app.get(
    '/',
    function(req, res){
        res.sendFile(__dirname + '/views/index.html');
    }
)


































 module.exports = app;
