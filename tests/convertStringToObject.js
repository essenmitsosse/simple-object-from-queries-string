"use strict";

var expect = require( "chai" )
	.expect,
	convertStringToObject = require( "../lib/convertStringToObject" );

describe( "Converts input string to object", function () {
	it( "one value", function () {
		var returnedObject = convertStringToObject( "foo=bar" );

		expect( returnedObject.foo )
			.to.equal( "bar" );
	} );

	it( "multiple values", function () {
		var returnedObject = convertStringToObject( "foo=bar&test=fest" );

		expect( returnedObject.foo )
			.to.equal( "bar" );

		expect( returnedObject.test )
			.to.equal( "fest" );
	} );

	it( "multiple with numbers", function () {
		var returnedObject = convertStringToObject( "foo=1&bar=2" );

		expect( returnedObject.foo )
			.to.equal( "1" );

		expect( returnedObject.bar )
			.to.equal( "2" );
	} );
} );
