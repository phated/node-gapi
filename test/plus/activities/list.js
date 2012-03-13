var gapi = require('../../../lib/gapi');
var should = require('should');

gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gapi.server.load('plus','v1',function() {

  // Successful request to activities.list()
  var activitiesListRequest = gapi.server.plus.activities.list({userId: '102147307918874735077', collection: 'public', maxResults: '1'});
  activitiesListRequest.execute(function(resp) {
      resp.should.have.property('items');
  });
  
  // Failed request to activities.list()
  var activitiesListRequestFail = gapi.server.plus.activities.list();
  should.not.exist(activitiesListRequestFail);

});