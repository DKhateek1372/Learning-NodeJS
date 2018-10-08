var express = require('express');
var router = express.Router();
var chalk = require('chalk');
var updateQuery = 'hi dk ,how r u';

/* GET home page. */
router.get('/home', function(req, res, next) {
	console.log(chalk.green('[Info]'), 'update query ::', updateQuery);
  res.render('home', { title: 'Express' });
  chalk.blue('Hello world!')

});



module.exports = router;