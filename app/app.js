var express = require('express');
var app = express();
var path = require('path');
var reload = require('reload');
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );

// send info from main file to speakers.js
app.set('appData', dataFile); // global variable appData will now hold the dataFile
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public/images')));
app.use('/js', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css', express.static(path.join(__dirname, 'public/stylesheets')));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function(res, req) {
    console.log('Listening on port ' + app.get('port'));
});

reload(server, app);