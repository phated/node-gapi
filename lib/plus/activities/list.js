var config = require('../../config')
	, querystring = require('querystring');

var activitiesList = function(options) {
  var userId     = options.userId,
      collection = options.collection;

  delete options.userId;
  delete options.collection;

  options.key = config.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  config.requestOptions.path = ['/plus/v1','/people/',userId,'/activities/',collection,'?',query].join('');

	return require('../../execute');
};

module.exports = activitiesList;
