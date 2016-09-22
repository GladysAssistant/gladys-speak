var download = require('./download.js');
var fs = require('fs');
var Speaker = require('speaker');
var lame = require('lame');
var shared = require('./shared.js');

module.exports = function(params){

	// first, we download the file
	// or take it from cache
	return download(params.language, params.text)
	  .then(function(path){

		// when we add the sentence to the queue
	  	shared.queue.push(function(cb){
	  		say(path, cb);
	  	});
		
		shared.queue.start(function(err) {});
	  });
};

function say(mp3, cb){
	fs.createReadStream(mp3)
	  .pipe(new lame.Decoder())
	  .on('format', function (format) {
			var speaker = new Speaker(format);
			speaker.on('close', function(){
				pause(cb);
			});
			this.pipe(speaker);
		});
}

function pause(cb){
	setTimeout(cb, 500);
}