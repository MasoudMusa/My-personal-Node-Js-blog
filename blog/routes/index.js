var express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        title:"Masoud.com"
    });
});

router.get('/about', function (req, res, next) {
    res.send('about me');
});

module.exports = router;