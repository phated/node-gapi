var common = require('./common');

var init = function() {
	var gapi = {};
	gapi.server = {};
	gapi.server.setApiKey = function(apiKey) {
		common.api.key = apiKey;
	};
	gapi.server.load = function(apiName, apiVersion, callback) {
		var apiToLoad = ['./',apiName,'/',apiVersion].join('');
		this[apiName] = require(apiToLoad);
		callback();
	};
	return gapi;
}

module.exports = init();
