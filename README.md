A Node.js implementation of the ["JavaScript Client Library for Google APIs - Alpha version"](https://code.google.com/p/google-api-javascript-client/)


## Installation

To install gapi, use [npm](http://github.com/isaacs/npm):

    $ npm install -g gapi

## Usage

Include gapi

```javascript
var gapi = require('gapi');
```

To get started, set your API key with `gapi.server.setApiKey()`:

```javascript
gapi.server.setApiKey('YOUR_API_KEY');
```

You can then use `gapi.server.load('API_NAME', 'API_VERSION', CALLBACK)` to load the API you wish to use:

```javascript
gapi.server.load('plus','v1',function(){});
```

Inside your load callback, you can generate your requests using the `gapi.server.API_NAME.NAMESPACE.FUNCTION(OPTIONS)` pattern:

```javascript
var request = gapi.server.plus.people.get({userId: '102147307918874735077'});
```

To execute your request, you can call `REQUEST.execute(CALLBACK(RESPONSE))`:

```javascript
request.execute(function(resp){});
```

The response of the callback is a JSON object that you can work with:

```javascript
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(JSON.stringify(resp));
```

Putting it all together:

```javascript
gapi.server.setApiKey('YOUR_API_KEY');
gapi.server.load('plus','v1',function(){
	var request = gapi.server.plus.people.get({userId: '102147307918874735077'});
	request.execute(function(resp){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end(JSON.stringify(resp));
	});
});
```

## Currently Implemented Request Functions and Options
Get an Activity

```javascript
/* activityId is Required*/
gapi.server.plus.activities.get({
	activityId : '',
	fields : ''
});
```

List Activities

```javascript
/* userId and collection are Required;
	 collection : 'public' is the only available option currently */
gapi.server.plus.activities.list({
	userId : '',
	collection : 'public',
	maxResults : '',
	pageToken : '',
	fields : ''
});
```

```javascript
gapi.server.plus.activities.search({query: 'Test', maxResults: '1'});

gapi.server.plus.comments.get({commentId: 'sTcuoWTR52tnNY9UpoW2TfNb0PnCiiutGuDoTzFyeoI7hNeoa-HBWHoDTQBA59pNvtVbsipeS_U', maxResults: '1'});

gapi.server.plus.comments.list({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});

gapi.server.plus.people.get({userId: '102147307918874735077'});

gapi.server.plus.people.listByActivity({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'});

gapi.server.plus.people.search({query: 'Blaine+Bublitz'});
```

## Examples

You can view further examples in the [example folder.](https://github.com/phated/gapi-npm/tree/master/examples)

## LICENSE

(MIT License)

Copyright (c) 2011 Phated <blaine@iceddev.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
