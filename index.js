

module.exports = function(sails) {
    
    var say = require('./lib/say.js');
    var install = require('./lib/install.js');
    var notify = require('./lib/notify.js');

    return {
        say: say,
        install: install,
        notify: notify
    };
};