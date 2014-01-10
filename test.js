var assert = require("assert");
var minMax = require("./scripts/minMax");


describe("minMax function", function() {
    "use strict";

    var bigNumber = 100;
    var bigFloatNumber = 100.3221;
    var smallNumber = 7;
    var smallFloatNumber = 6.777777;
    var negNumber = -50;
    var zero = 0;

    it('should return number if number is within range', function() {
        assert.equal(minMax(smallNumber, zero, bigNumber), smallNumber);
        assert.equal(minMax(smallFloatNumber, zero, bigFloatNumber), smallFloatNumber);
    });

    it('should return low border if number is less than low border', function() {
        assert.equal(minMax(negNumber, zero, bigNumber), zero);
        assert.equal(minMax(negNumber, zero, bigFloatNumber), zero);
    });

    it('should return upper border if number is greater than upper border', function() {
        assert.equal(minMax(bigNumber, zero, smallNumber), smallNumber);
        assert.equal(minMax(bigFloatNumber, zero, smallFloatNumber), smallFloatNumber);
    });


    it('should return the input value if any other type than Number is given', function() {
        assert.equal(minMax("string", zero, bigNumber), "string");
        assert.deepEqual(minMax({
            a: 1,
            b: 2
        }, zero, bigNumber), {
            a: 1,
            b: 2
        });
        assert.deepEqual(minMax([1, 2, 3, 4, 5], zero, bigNumber), [1, 2, 3, 4, 5]);

        assert.equal(minMax(undefined, zero, bigNumber), undefined);
        assert.equal(minMax("", zero, bigNumber), "");
        assert.deepEqual(minMax({}, zero, bigNumber), {});
        assert.deepEqual(minMax([], zero, bigNumber), []);
    });
});