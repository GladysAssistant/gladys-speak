var say = require('./say.js');

module.exports = function(notification, user){
	return say({language: user.language.substr(0, 2).toLowerCase(), text: notification.text });
};