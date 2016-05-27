var promise = require('promise');

function checkPalindrome (req) {
	return new promise(function (resolve, reject) {
		var word = req.query.word || req.body.word;

		if(!word || !word.length)
			return reject('Invalid Params.');

		word = word.toLowerCase().replace(/ /g,'');
		var reverseWord = word.split('').reverse().join('');

		if(word != reverseWord)
			return reject('Not Match.');
		resolve();
	});
}

module.exports = {
	checkPalindrome : checkPalindrome,
};