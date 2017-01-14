var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.get('/r', function(req, res) {
    res.send("Hello World-r");
});

app.listen(process.env.PORT || 8080, process.env.IP);