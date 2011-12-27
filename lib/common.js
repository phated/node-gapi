var common = {
  api : {
    key: null
  },
  error : function(err) {
    if(err.type === 'non_object_property_load') {
        err.message += ['. Please define \'', err.arguments[0], '\' inside your arguments.'].join('');
    }
    console.error(err.message);
  },
	requestOptions : {
    host: 'www.googleapis.com',
    port: 443,
    path: '',
    method: 'GET'
  }
};

module.exports = common;
