var common = require('../../common')
	, querystring = require('querystring');

var activitiesList = function(options) {
  var userId     = options.userId,
      collection = options.collection;

  delete options.userId;
  delete options.collection;

  options.key = common.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  common.requestOptions.path = ['/plus/v1','/people/',userId,'/activities/',collection,'?',query].join('');

	return require('../../execute');
};

module.exports = activitiesList;
