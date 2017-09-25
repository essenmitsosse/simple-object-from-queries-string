"use strict";

module.exports = function ( object, nameValuePair ) {
	var nameValuePairParts = nameValuePair.split( "=" ),
		name = nameValuePairParts[ 0 ],
		value = nameValuePairParts[ 1 ];

	object[ name ] = value;

	return object;
};
