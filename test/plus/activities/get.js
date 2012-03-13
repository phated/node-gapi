var gapi = require('../../../lib/gapi');
var should = require('should');

gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gapi.server.load('plus','v1',function() {

    // Successful request to activities.get()
    var activitiesGetRequest = gapi.server.plus.activities.get({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});
    activitiesGetRequest.execute(function(resp){
        resp.should.have.property('object');
    });
    
    // Failed request to activities.get()
    var activitiesGetRequestFail = gapi.server.plus.activities.get();
    should.not.exist(activitiesGetRequestFail);

});