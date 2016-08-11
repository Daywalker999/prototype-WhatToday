var fs=require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use('/public', express.static('public'));






app.get('/*', function(req, res) {
    res.sendfile('index.html');
});

app.listen(8000, function() {
    console.log('App listening on port 8000!');
});
