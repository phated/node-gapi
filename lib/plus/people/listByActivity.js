var common = require('../../common');

var peopleListByActivity = function(options) {
    var request_options = {
        host: 'www.googleapis.com',
        port: 443,
        path: '/plus/v1',
        method: 'GET'
    };
    var activityId = options.activityId,
        collection = options.collection;
    delete options.activityId;
    delete options.collection;
    options.key = common.api.key;
    var query = common.querystring.stringify(options);
    request_options.path = [request_options.path,'/activities/',activityId,'/people/',collection,'?',query].join('');
    return {
        execute : function(callback){
            var output;
    
            var req = common.https.request(request_options, function(res) {
                res.on('data', function(data) {
                    output += data;
                });
                res.on('end', function() {
                    callback(output);
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
        }
    };
};

module.exports = peopleListByActivity;