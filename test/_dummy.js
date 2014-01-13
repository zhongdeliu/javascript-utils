var assert = require("assert");
var dummy = require("./../scripts/_dummy");


describe("dummy function", function() {
    "use strict";

    it('should work', function() {
        assert.equal(dummy(), true);
    });
});