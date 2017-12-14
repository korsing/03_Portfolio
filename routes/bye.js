const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { greeting: 'Bye World!' });
});
router.get('/byeworld', function(req, res, next) {
    res.render('index', { greeting: 'Bye Bye World!' });
});


module.exports = router;  // we need to expose this router, so that app.use() can have all these .get('/') subroutes attached.