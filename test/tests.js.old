var config = require('../lib/config.js');

config.error = function(err) {
  if(err.type === 'non_object_property_load') {
      console.error('Error Expected (Required property not defined) ->');
      err.message += ['. Please define \'', err.arguments[0], '\' inside your arguments.'].join('');
  }
  console.error(err.message);
};

require('./plus/activities/list');

require('./plus/activities/get');

require('./plus/activities/search');

require('./plus/comments/get');

require('./plus/comments/list');

require('./plus/people/get');

require('./plus/people/listByActivity');

require('./plus/people/search');