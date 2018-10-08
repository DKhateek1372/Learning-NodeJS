var express = require('express');
var router = express.Router();


/* GET address page. */
router.get('/address', function(req, res, next) {
  res.render('address', { title: 'Express' });
});

module.exports = router;


