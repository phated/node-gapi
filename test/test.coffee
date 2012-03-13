describe 'requiring gapi module', ->
	it 'should contain the server namespace', ->
    gapi = require '../index'
    gapi.should.have.property 'server'
    describe 'server namespace', ->
      it 'shoud contain the setApiKey function', ->
        gapi.server.should.have.property 'setApiKey'
        gapi.server.setApiKey.should.be.a 'function'
        describe 'calling setApiKey', ->
          it 'should set config.api.key to the value of first parameter', ->
            gapi.server.setApiKey '1111'
            config = require '../lib/config.coffee'
            config.api.key.should.equal '1111'
      it 'should contain the load function', ->
        gapi.server.should.have.property 'load'
        gapi.server.load.should.be.a 'function'
        describe 'calling load with "plus" and "v1"', ->
          it 'should add plus namespace to gapi.server', ->
            gapi.server.load 'plus', 'v1', ->
              gapi.server.should.have.property 'plus'