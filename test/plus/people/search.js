var gapi = require('../../../lib/gapi');
var should = require('should');

gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gapi.server.load('plus','v1',function() {
        
  // Successful request to people.search()
  var peopleSearchRequest = gapi.server.plus.people.search({query: 'Blaine%20Bublitz'});
  peopleSearchRequest.execute(function(resp) {
      resp.should.have.property('items');
  });
  
  // Failed request to people.search()
  var peopleSearchRequestFail = gapi.server.plus.people.search();
  should.not.exist(peopleSearchRequestFail);
        
});