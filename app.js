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

app.get('/freebitcoin', function (req, res) {
    res.redirect("https://freebitco.in/?r=2080502&tag=youtube");
});

app.get('/coinbase', function (req, res) {
    res.redirect("https://www.coinbase.com/join/56af7610fa5de309f4000257");
});

app.get('/appbitcoingratis', function (req, res) {
    var file = path.join(publicDir, 'assets/apk/freebitcoin-faceads.apk');
    res.download(file);
});

app.get('/pt', function (req, res) {
    var string = encodeURIComponent('pt');
    res.redirect('/?lang=' + string);
});


app.get('/freebitcoin', function (req, res) {
    var obj = fs.readFileSync(path.join(publicDir, 'freebitcoin.html'), 'utf8');
    res.send(obj);
});


app.get('/converter', function (req, res) {
    var obj = fs.readFileSync(path.join(publicDir, 'converter.html'), 'utf8');
    res.send(obj);
});

app.get('/conversor', function (req, res) {
    var obj = fs.readFileSync(path.join(publicDir, 'conversor.html'), 'utf8');
    res.send(obj);
});

app.get('/tutorialbonusbitcoin', function (req, res) {
    var obj = fs.readFileSync(path.join(publicDir, 'tutorialbonusbitcoin.html'), 'utf8');
    res.send(obj);
});


var port = process.env.PORT || 8080;
app.listen(port);