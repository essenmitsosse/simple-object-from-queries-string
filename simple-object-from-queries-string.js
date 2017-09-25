"use strict";

module.exports = function () {
	var getUrlQueriesString = require( "./lib/getUrlQueriesString" ),
		convertStringToObject = require( "./lib/convertStringToObject" );

	return convertStringToObject( getUrlQueriesString() );
};
