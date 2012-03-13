var gapi = require('../../../lib/gapi');
var should = require('should');

gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gapi.server.load('plus','v1',function() {
        
  // Successful request to people.listByActivity()
  var peopleListByActivityRequest = gapi.server.plus.people.listByActivity({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'});
  peopleListByActivityRequest.execute(function(resp) {
      resp.should.have.property('items');
  });
  
  // Failed request to people.listByActivity()
  var peopleListByActivityRequestFail = gapi.server.plus.people.listByActivity();
  should.not.exist(peopleListByActivityRequestFail);

});