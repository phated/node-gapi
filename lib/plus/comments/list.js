var config = require('../../config')
	, querystring = require('querystring');

var commentsList = function(options) {
  var activityId = options.activityId;

  delete options.activityId;

  options.key = config.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  config.requestOptions.path = ['/plus/v1','/activities/',activityId,'/comments','?',query].join('');

	return require('../../execute');
};

module.exports = commentsList;
