var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );

// send info from main file to speakers.js
app.set('appData', dataFile); // global variable appData will now hold the dataFile

app.use(express.static('app/public')); // static method --> designate a folder
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function(res, req) {
    console.log('Listening on port ' + app.get('port'));
});