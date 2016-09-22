var http = require('http');
var fs = require('fs');
var md5 = require('md5');
var shared = require('./shared.js');
var fse = require('fs-extra');

module.exports = function (language, text){

	var options = {
		hostname: `translate.google.com`,
		path: `/translate_tts?tl=${language}&client=tw-ob&q=${encodeURIComponent(text)}`,
		method: 'GET',
		headers: {'user-agent': 'Mozilla/5.0'},
	};

	var dest = shared.dest + md5(language + text) + '.mp3';

	// downloading and saving file
	return new Promise(function(resolve, reject){

		// we test first if the file does not already exist
		fs.exists(dest, function(exists) { 
		  
		  // if the file already exist
		  if (exists) { 
		  	console.log('Using cache, file already exist');
		  	return resolve(dest);
		  }  else {

		  	// else, we download it
		  	var request = http.get(options, function(response) {
				if(response.statusCode >= 200 && response.statusCode < 300){
					var file = fs.createWriteStream(dest);
					response.pipe(file);
					file.on('finish', function() {
						file.close();
					});
					file.on('close', function(){
						resolve(dest);
					});
				}else{
					reject(new Error('Fail downloading'));
				}
			});

		  }
		}); 

	});
};