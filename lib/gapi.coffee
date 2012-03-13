config = require('./config')

module.exports =
  server:
    setApiKey: (apiKey) ->
      config.api.key = apiKey
    load: (apiName, apiVersion, callback) ->
      apiToLoad = ['./',apiName,'/',apiVersion].join('')
      this[apiName] = require(apiToLoad)
      callback()