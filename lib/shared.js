
var queue = require('queue'); 
var q = queue({
	concurrency: 1
});
q.start(function(err) {console.log(err);});

module.exports = {
	dest: './cache/sound/',
	queue: q
};