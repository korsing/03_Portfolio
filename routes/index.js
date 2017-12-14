const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { greeting: 'Hello World!' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { greeting: 'Hello World!' });
});
router.get('/index.html', function(req, res, next) {
    res.render('index', { greeting: 'Hello World!' });
});
router.get('/hello', function(req, res, next) {
    res.render('index', { greeting: 'Hello World!' });
});


module.exports = router;  // we need to expose this router, so that app.use() can have all these .get('/') subroutes attached.