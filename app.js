var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var publicDir = path.join(__dirname, 'public')
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    var obj = fs.readFileSync(path.join(publicDir, 'index.html'), 'utf8');
    if (req.query.lang == "en") {}
    res.send(obj);
});

app.get('/app/direto/freebitcoin', function (req, res) {
    res.download(path.join(publicDir, 'apk/freebitcoin.apk'));
});

app.get('/app/facebook/freebitcoin', function (req, res) {
    res.download(path.join(publicDir, 'apk/freebitcoin-facebook.apk'));
});

app.get('/app/youtube/freebitcoin', function (req, res) {
    res.download(path.join(publicDir, 'apk/freebitcoin-youtube.apk'));
});

var port = process.env.PORT || 8080;
app.listen(port);