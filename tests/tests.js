var gplus = require('../lib/gplus');
var should = require('should');

gplus.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
gplus.server.load('plus','v1',function() {
    
    // Successful request to activities.get()
    var activitiesGetRequest = gplus.server.plus.activities.get({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});
    activitiesGetRequest.execute(function(resp){
        resp.should.include('items').and.be.json;
    });
    
    // Failed request to activities.get()
    var activitiesGetRequestFail = gplus.server.plus.activities.get();
    should.not.exist(activitiesGetRequestFail);
    
    // Successful request to activities.list()
    var activitiesListRequest = gplus.server.plus.activities.list({userId: '102147307918874735077', collection: 'public', maxResults: '1'});
    activitiesListRequest.execute(function(resp) {
        resp.should.include('items').and.be.json;
    });
    
    // Failed request to activities.list()
    var activitiesListRequestFail = gplus.server.plus.activities.list();
    should.not.exist(activitiesListRequestFail);
    
    // Successful request to activities.search()
    var activitiesSearchRequest = gplus.server.plus.activities.search({query: 'Test'});
    activitiesSearchRequest.execute(function(resp) {
        resp.should.include('items').and.be.json;
    });
    
    // Failed request to activities.search()
    var activitiesSearchRequestFail = gplus.server.plus.activities.search();
    should.not.exist(activitiesSearchRequestFail);
        
    // Successful request to comments.get()
    var commentsGetRequest = gplus.server.plus.comments.get({commentId: 'sTcuoWTR52tnNY9UpoW2TfNb0PnCiiutGuDoTzFyeoI7hNeoa-HBWHoDTQBA59pNvtVbsipeS_U', maxResults: '1'});
    commentsGetRequest.execute(function(resp) {
        resp.should.include('content').and.be.json;
    });
    
    // Failed request to comments.get()
    var commentsGetRequestFail = gplus.server.plus.comments.get();
    should.not.exist(commentsGetRequestFail);
        
    // Successful request to comments.list()
    var commentsListRequest = gplus.server.plus.comments.list({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});
    commentsListRequest.execute(function(resp) {
        resp.should.include('items').and.be.json;
    });
    
    // Failed request to comments.list()
    var commentsListRequestFail = gplus.server.plus.comments.list();
    should.not.exist(commentsListRequestFail);
        
    // Successful request to people.get()
    var peopleGetRequest = gplus.server.plus.people.get({userId: '102147307918874735077', maxResults: '1'});
    peopleGetRequest.execute(function(resp) {
        resp.should.include('displayName').and.be.json;
    });
    
    // Failed request to people.get()
    var peopleGetRequestFail = gplus.server.plus.people.get();
    should.not.exist(peopleGetRequestFail);
        
    // Successful request to people.listByActivity()
    var peopleListByActivityRequest = gplus.server.plus.people.listByActivity({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'});
    peopleListByActivityRequest.execute(function(resp) {
        resp.should.include('items').and.be.json;
    });
    
    // Failed request to people.listByActivity()
    var peopleListByActivityRequestFail = gplus.server.plus.people.listByActivity();
    should.not.exist(peopleListByActivityRequestFail);
        
    // Successful request to people.search()
    var peopleSearchRequest = gplus.server.plus.people.search({query: 'Blaine%20Bublitz'});
    peopleSearchRequest.execute(function(resp) {
        resp.should.include('items').and.be.json;
    });
    
    // Failed request to people.search()
    var peopleSearchRequestFail = gplus.server.plus.people.search();
    should.not.exist(peopleSearchRequestFail);
        
});