var config = require('../../config')
	, querystring = require('querystring');

var peopleGet = function(options) {

  var userId = options.userId;

  delete options.userId;

  options.key = config.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

	config.requestOptions.path = ['/plus/v1','/people/',userId,'?',query].join('');

  return require('../../execute');
};

module.exports = peopleGet;
