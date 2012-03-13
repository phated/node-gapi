var gapi = require('../../../lib/gapi');
var should = require('should');

gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gapi.server.load('plus','v1',function() {
    
  // Successful request to activities.search()
  var activitiesSearchRequest = gapi.server.plus.activities.search({query: 'Test'});
  activitiesSearchRequest.execute(function(resp) {
      resp.should.have.property('items');
  });
  
  // Failed request to activities.search()
  var activitiesSearchRequestFail = gapi.server.plus.activities.search();
  should.not.exist(activitiesSearchRequestFail);

});