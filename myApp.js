var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
const dotenv = require('dotenv');
dotenv.config();


app.get(
    '/json',
    function(req, res){
        var response_message = 'Hello json';
        if(process.env.MESSAGE_STYLE == "uppercase") {
            response_message = response_message.toUpperCase();
        }

        res.json({"message": response_message});
    }
);

app.get(
    '/',
    function(req, res){
        res.sendFile(__dirname + '/views/index.html');
    }
)


































 module.exports = app;
