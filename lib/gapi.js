var common = require('./common');

var gplus = function() {
    var gapi = {
        server : {
            setApiKey : function(api_key){
                common.api.key = api_key;
            },
            load : function(api_name, api_version, callback){
                var load_api = ['./', api_name, '/', api_version].join('');
                this[api_name] = require(load_api);
                callback();
            }
        }
    };
    return gapi;
};

module.exports = gplus();