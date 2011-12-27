var common = require('../../common')
	, querystring = require('querystring');

var webfontsList = function(options) {
  options.key = common.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

	common.requestOptions.path = ['/webfonts/v1','/webfonts','?',query].join('');

  return require('../../execute');
};

module.exports = webfontsList;
