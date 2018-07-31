var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000 );

app.get('/', function (req, res) {
   res.send("<h1> Roux Meetups </h1>");
});

var server = app.listen(app.get('port'), function(res, req) {
    console.log('Listening on port ' + app.get('port'));
});