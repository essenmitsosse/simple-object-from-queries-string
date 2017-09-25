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

describe( "return an empty string for not given values when passed", function () {
	it( "one value", function () {
		var returnedObject = convertStringToObject( "foo=" );

		expect( returnedObject.foo )
			.to.equal( "" );
	} );

	it( "multiple values", function () {
		var returnedObject = convertStringToObject( "foo=&bar=barValue" );

		expect( returnedObject.foo )
			.to.equal( "" );

		expect( returnedObject.bar )
			.to.equal( "barValue" );
	} );
} );

describe( "can handles quotes", function () {
	it( "single", function () {
		var returnedObject = convertStringToObject( "foo='bar'" );

		expect( returnedObject.foo )
			.to.equal( "'bar'" );
	} );

	it( "double", function () {
		var returnedObject = convertStringToObject( "foo=\"bar\"" );

		expect( returnedObject.foo )
			.to.equal( "\"bar\"" );
	} );
} );
