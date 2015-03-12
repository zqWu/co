var co = require('./index.js');

var fs = require('fs');
co(function* readFile(file, encoding) {
	var p1 =
		yield new Promise(function(fulfill, reject) {
			fs.readFile(__filename, 'utf8', function(err, res) {
				if(err){console.log(err);}
				if (err) reject(err);
				else fulfill(1);
			})
		});
	return p1;
}).then(function(value) {
	console.log(value);
}).catch(function(err) {
	console.log(err);
})

// accroding to https://github.com/tj/co
// co(someFunction which returns a Promise) => returns a Promise