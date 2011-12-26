var common = {
    querystring : require('querystring'),
    https : require('https'),
    api : {
        key: null
    },
    error : function(err) {
        if(err.type === 'non_object_property_load') {
            err.message += ['. Please define \'', err.arguments[0], '\' inside your arguments.'].join('');
        }
        console.error(err.message);
    }
};

module.exports = common;