var gapi = require('../../../lib/gapi');
var should = require('should');

gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gapi.server.load('plus','v1',function() {
        
  // Successful request to comments.list()
  var commentsListRequest = gapi.server.plus.comments.list({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});
  commentsListRequest.execute(function(resp) {
      resp.should.have.property('items');
  });
  
  // Failed request to comments.list()
  var commentsListRequestFail = gapi.server.plus.comments.list();
  should.not.exist(commentsListRequestFail);

});