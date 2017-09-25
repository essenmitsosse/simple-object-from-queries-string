"use strict";
var reduceQueriesStringNameValuePairsToObject = require( "./reduceQueriesStringNameValuePairsToObject" );

module.exports = function ( queriesString ) {
	var queriesStringNameValuePairs = queriesString.split( "&" );

	return queriesStringNameValuePairs.reduce( reduceQueriesStringNameValuePairsToObject, {} );
};
