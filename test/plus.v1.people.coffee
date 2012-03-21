gapi = require "../index"
config = require "../lib/config"

gapi.server.setApiKey "AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI"
gapi.server.load "plus", "v1", ->
  describe "calling people.get({userId: '102147307918874735077'})", ->
    it "should add /plus/v1/people/102147307918874735077?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json to config.requestOptions.path", ->
      gapi.server.plus.people.get userId: '102147307918874735077'
      config.requestOptions.path.should.equal '/plus/v1/people/102147307918874735077?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json'
  describe "calling people.listByActivity({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'})", ->
    it "should add /plus/v1/activities/z12mijziozu0x5hrd04cfhnw1yymsn2o414/people/plusoners?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&maxResults=1 to config.requestOptions.path", ->
      gapi.server.plus.people.listByActivity activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'
      config.requestOptions.path.should.equal '/plus/v1/activities/z12mijziozu0x5hrd04cfhnw1yymsn2o414/people/plusoners?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&maxResults=1'
  describe "calling people.search({query: 'Blaine Bublitz'})", ->
    it "should add /plus/v1/people?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&query=Blaine%20Bublitz to config.requestOptions.path", ->
      gapi.server.plus.people.search query: 'Blaine Bublitz'
      config.requestOptions.path.should.equal '/plus/v1/people?key=AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI&alt=json&query=Blaine%20Bublitz'