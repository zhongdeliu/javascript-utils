var assert = require("assert");
var pad = require("./../scripts/pad");


describe("pad function", function() {
    "use strict";

    it('should be defined as a function', function() {
        assert.equal(typeof pad, "function");
    });

    it('should pad a shorter number to the given length', function() {
        assert.equal(pad(1, 3), "001");
        assert.equal(pad(1000, 5), "01000");
        assert.equal(pad(5000, 10), "0000005000");
    });

    it('should not alter a longer/same-length number to the given length', function() {
        assert.equal(pad(1000, 3), "1000");
        assert.equal(pad(1000, 4), "1000");
        assert.equal(pad("Hallo", 3), "Hallo");
    });

    it('should pad a shorter number to the given length width a custom character', function() {
        assert.equal(pad(1, 3, 1), "111");
        assert.equal(pad(5000, 10, "X"), "XXXXXX5000");
    });

});