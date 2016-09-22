var shared = require('./shared.js');
var fse = require('fs-extra');

module.exports = function(){
	fse.mkdirsSync(shared.dest);
};