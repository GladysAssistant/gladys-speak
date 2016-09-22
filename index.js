

module.exports = function(sails) {
    
    var say = require('./lib/say.js');
    var install = require('./lib/install.js');

    return {
        say: say,
        install: install
    };
};