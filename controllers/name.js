var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/name/:item', function(req, res, next) {
  // res.send('welcome'+req.params.id);
  res.render('name', { title: 'Express' ,item : req.param("item"), head : "hello world!"});
});

module.exports = router;