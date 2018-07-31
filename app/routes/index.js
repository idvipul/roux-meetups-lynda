var express = require('express');
// router object of express library
var router = express();

router.get('/', function (req, res) {
    res.send("<h1> Roux Meetups </h1>");
});

// export router object
module.exports = router;