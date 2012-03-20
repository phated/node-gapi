gapi = require "../index"
config = require "../lib/config"

gapi.server.setApiKey "AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI"
gapi.server.load "plus", "v1", ->
  describe "calling activities.get({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414'})", ->
    it "should add /plus/v1/activities/z12mijziozu0x5hrd04cfhnw1yymsn2o414?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json to config.requestOptions.path", ->
      gapi.server.plus.activities.get activityId: "z12mijziozu0x5hrd04cfhnw1yymsn2o414"
      config.requestOptions.path.should.equal "/plus/v1/activities/z12mijziozu0x5hrd04cfhnw1yymsn2o414?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json"
  describe "calling activities.list({userId: '102147307918874735077', collection: 'public', maxResults: '1'})", ->
    it "should add /plus/v1/people/102147307918874735077/activities/public?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&maxResults=1 to config.requestOptions.path", ->
      gapi.server.plus.activities.list userId: '102147307918874735077', collection: 'public', maxResults: '1'
      config.requestOptions.path.should.equal "/plus/v1/people/102147307918874735077/activities/public?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&maxResults=1"
  describe "calling activities.search({query: 'Test'})", ->
    it "should add /plus/v1/activities?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&query=Test to config.requestOptions.path", ->
      gapi.server.plus.activities.search query: 'Test'
      config.requestOptions.path.should.equal "/plus/v1/activities?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&query=Test"