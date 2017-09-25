"use strict";

var expect = require( "chai" )
	.expect,
	getObjectFromQueriesString = require( "../simple-object-from-queries-string" );

describe( "Implementation test", function () {
	it( "basic implementation with two values", function () {
		global.window = {
			location: {
				search: "?foo=bar&test=1"
			}
		};

		var returnedObject = getObjectFromQueriesString();

		expect( returnedObject.foo )
			.to.equal( "bar" );

		expect( returnedObject.test )
			.to.equal( "1" );
	} );
} );
