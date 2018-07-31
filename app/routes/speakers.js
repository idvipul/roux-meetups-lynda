var express = require('express');
var router = express();

router.get('/speakers', function(req, res) {
    var info = '';
    // get appData from app.js
    var dataFile = req.app.get('appData');

    // get each speaker info in info variable
    dataFile.speakers.forEach(function (item) {
        // `` --> ES6 supports back ticks for multi line
        info += `
        <li> 
            <h2> ${item.name} </h2>
            <p> ${item.summary} </p>
        </li>
        `;
    });

    // send info variable to the speakers route
    res.send(`
        <h1> Roux Meetups </h1>
        ${info}
    `);
});

router.get('/speakers/:speakerid', function(req, res) {
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakerid];

    res.send(`
        <h2> ${speaker.title} </h2>
        <h2> with ${speaker.name} </h2>
        <p> ${speaker.summary} </p>
    `);
});

module.exports = router;