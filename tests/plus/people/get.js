var gapi = require('../../../lib/gapi');
var should = require('should');

gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gapi.server.load('plus','v1',function() {
        
  // Successful request to people.get()
  var peopleGetRequest = gapi.server.plus.people.get({userId: '102147307918874735077', maxResults: '1'});
  peopleGetRequest.execute(function(resp) {
      resp.should.have.property('displayName');
  });
  
  // Failed request to people.get()
  var peopleGetRequestFail = gapi.server.plus.people.get();
  should.not.exist(peopleGetRequestFail);

});