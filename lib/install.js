var shared = require('./shared.js');
var fse = require('fs-extra');

module.exports = function(){
	fse.mkdirsSync(shared.dest);
	
	var type = {
		name: 'Speak (Google Voice)',
		service: 'speak'
	};

	return gladys.notification.install(type);
};