var express = require('express');
// router object of express library
var router = express();

router.get('/', function(req, res) {
    res.render('index');
});

// export router object
module.exports = router;