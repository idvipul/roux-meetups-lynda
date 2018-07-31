var express = require('express');
// router object of express library
var router = express();

router.get('/', function (req, res) {
    res.send(`
        <link rel="stylesheet" type="text/css" href="/css/style.css">
        <h1> Roux Meetups </h1>
        <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
        <p> Roux Academy Meetups put together artists from all walks of life </p>
    `);
});

// export router object
module.exports = router;