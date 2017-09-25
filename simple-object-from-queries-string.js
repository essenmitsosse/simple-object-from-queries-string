"use strict";

module.exports = function () {
	var urlQueriesString = require( "./lib/getUrlQueriesString" ),
		convertStringToObject = require( "./lib/convertStringToObject" );

	return convertStringToObject( urlQueriesString );
};
