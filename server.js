var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.get('/xyz', function(req, res) {
    res.send("Hello World-r");
});

app.get('/renamed', function(req, res) {
    res.send("Hello World-renamed");
});

app.listen(process.env.PORT || 8080, process.env.IP);