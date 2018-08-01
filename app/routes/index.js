var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var data = req.app.get('appData');

    // stores artworks of every artist
    var pagePhotos = [];

    data.speakers.forEach(function (item) {
        // get artworks of eery artist
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        pageID: 'home'
    });

});

module.exports = router;
