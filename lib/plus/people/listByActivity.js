var config = require('../../config')
	, querystring = require('querystring');

var peopleListByActivity = function(options) {
  var activityId = options.activityId,
      collection = options.collection;

  delete options.activityId;
  delete options.collection;

  options.key = config.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  config.requestOptions.path = ['/plus/v1','/activities/',activityId,'/people/',collection,'?',query].join('');

  return require('../../execute');
};

module.exports = peopleListByActivity;
