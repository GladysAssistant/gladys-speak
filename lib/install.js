var shared = require('./shared.js');
var fse = require('fs-extra');

module.exports = function(){
	fse.mkdirsSync(shared.dest);
	
	var type = {
		name: 'Speak (Google Voice)',
		service: 'speak'
	};

	gladys.notification.install(type);
	
	return exec(`sudo apt-get install libasound2-dev`);
};
