const home = require('../controllers/home');
const address = require('../controllers/address');
const name = require('../controllers/name');


exports.setupRoutes = function (app) {
app.get('/home', home);
app.get('/address', address);
app.get('/name/:item',name);
};