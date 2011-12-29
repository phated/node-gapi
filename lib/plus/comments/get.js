var config = require('../../config')
	, querystring = require('querystring');

var commentsGet = function(options) {
  var commentId = options.commentId;

  delete options.commentId;

  options.key = config.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  config.requestOptions.path = ['/plus/v1','/comments/',commentId,'?',query].join('');

	return require('../../execute');
};

module.exports = commentsGet;
