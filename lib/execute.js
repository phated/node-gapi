var config = require('./config')
	, https = require('https');

var restCall = {};
restCall.execute = function(callback){
	var output = '';

	var req = https.request(config.requestOptions, function(res) {
	  res.on('data', function(data) {
	      output += data;
	  });
	  res.on('end', function() {
	      callback(JSON.parse(output));
	  });
	  res.on('close', function() {
	      res.emit('end');
	  });
	});

	req.end();
	req.on('error', function(err) {
	    callback(err);
	});

	return req;
};

module.exports = restCall;