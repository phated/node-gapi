var config = require('../../config')
	, querystring = require('querystring');

var peopleSearch = function(options) {
  var searchTerms = options.query;

  options.key = config.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  config.requestOptions.path = ['/plus/v1','/people','?',query].join('');

	return require('../../execute');
};

module.exports = peopleSearch;
