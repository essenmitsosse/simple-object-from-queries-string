# Module Name

[![Build Status](https://travis-ci.org/essenmitsosse/simple-object-from-queries-string.svg)](https://travis-ci.org/essenmitsosse/simple-object-from-queries-string) [![Coverage Status](https://coveralls.io/repos/github/essenmitsosse/simple-object-from-queries-string/badge.svg)](https://coveralls.io/github/essenmitsosse/simple-object-from-queries-string) [![Dependency Status](https://david-dm.org/essenmitsosse/simple-object-from-queries-string.svg)](https://david-dm.org/essenmitsosse/simple-object-from-queries-string)

Returns an object, based on the url queries string.

# Installation

`npm i simple-object-from-queries-string -D`

# Usage

```javascript
var getQueryStringObject = require( "simple-object-from-queries-string" ),
    queryStringObject = getQueryStringObject();
```

If the URL looks like this:

`http://myurl.com/sub/?foo=bar&test=3`

The returned object will look like this:

```javascript
{
    'foo': 'bar',
    'test': '3'
}
```

Note that no type conversion takes place.
