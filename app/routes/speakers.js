var express = require('express');
var router = express();

router.get('/speakers', function(req, res) {
    var info = "";
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

module.exports = router;