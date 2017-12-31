const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index1', { greeting: 'Hello World0!' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { greeting: 'Hello World1!' });
});
router.get('/index.html', function(req, res, next) {
    res.render('index', { greeting: 'Hello World2!' });
});
router.get('/hello', function(req, res, next) {
    res.render('index', { greeting: 'Hello World3!' });
});


module.exports = router;  // we need to expose this router, so that app.use() can have all these .get('/') subroutes attached.