var assert = require("assert");
var objectGet = require("./../scripts/objectGet");

describe("objectGet function", function() {
    "use strict";

    var testObject = {
        "level1_a": {
            "level2_a": "a",
            "level2_b": 1,
            "level2_c": true,
            "level2_d": [1,2,3]
        },
        "level1_b": {
            "level2": {
                "level3": "level3"
            }
        }
    };


    it('should return obj if the indexString is a falsy value', function() {
        assert.deepEqual(testObject, testObject);
        assert.deepEqual(objectGet(testObject), testObject);
        assert.deepEqual(objectGet(testObject, undefined), testObject);
        assert.deepEqual(objectGet(testObject, false), testObject);
        assert.deepEqual(objectGet(testObject, ""), testObject);
    });

    it('should return undefined if the indexString is invalid', function() {
        assert.equal(objectGet(testObject, {a: 1, b: 2}), undefined);
    });

    it('should return undefined if the indexString is not found or invalid', function() {
        assert.equal(objectGet(testObject, "undefined.index.string"), undefined);
    });

    it('should return the property if the indexString is found', function() {
        assert.deepEqual(objectGet(testObject, "level1_a"), testObject["level1_a"]);
        assert.equal(objectGet(testObject, "level1_a.level2_a"), "a");
        assert.equal(objectGet(testObject, "level1_a.level2_c"), true);
        assert.deepEqual(objectGet(testObject, "level1_b.level2"), {"level3": "level3"});
    });
});