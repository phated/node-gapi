var common = require('../../common')
	, querystring = require('querystring');

var activitiesGet = function(options) {
    var activityId = options.activityId;

    delete options.activityId;

    options.key = common.api.key;
		options.alt = 'json';

    var query = querystring.stringify(options);

    common.requestOptions.path = ['/plus/v1','/activities/',activityId,'?',query].join('');

		return require('../../execute');
};

module.exports = activitiesGet;
