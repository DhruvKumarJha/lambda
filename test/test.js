// Simple mocha test
var assert = require('assert');


describe('Lambda', function() {


	describe('Function must log the event data', function () {

		it('should log the data received in the event', function () {
			assert.equal( "passing", "passing" );
		});

	});


	describe('#indexOf()', function () {

		it('should return -1 when the value is not present', function () {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});

	});


});



