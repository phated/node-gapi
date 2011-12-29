var gapi = require('../../../lib/gapi');
var should = require('should');

gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gapi.server.load('plus','v1',function() {
        
  // Successful request to comments.get()
  var commentsGetRequest = gapi.server.plus.comments.get({commentId: 'sTcuoWTR52tnNY9UpoW2TfNb0PnCiiutGuDoTzFyeoI7hNeoa-HBWHoDTQBA59pNvtVbsipeS_U', maxResults: '1'});
  commentsGetRequest.execute(function(resp) {
      resp.should.have.property('object');
  });
  
  // Failed request to comments.get()
  var commentsGetRequestFail = gapi.server.plus.comments.get();
  should.not.exist(commentsGetRequestFail);

});