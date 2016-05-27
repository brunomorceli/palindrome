var express  = require('express');
var path     = require('path');
var business = require(path.join('..', 'business', 'palindrome'));
var router   = express.Router();

router.get('/compare', function(req, res, next) {
	business.checkPalindrome(req)
	.then(function () {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end();
	})
	.catch(function (error) {
		res.writeHead(400, {'Content-Type': 'application/json'});
		res.end();
	});
});

module.exports = router;