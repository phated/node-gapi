var common = require('../common');

// Wfonts Namespace
var wfonts = {};

// Webfonts Namespace
wfonts.webfonts = {};
wfonts.webfonts.list = function(options) {
	try {
		  return require('./webfonts/list')(options);
	} catch (err) {
		  common.error(err);
	}
};


module.exports = wfonts;
