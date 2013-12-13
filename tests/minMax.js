// QUnit globals
/* global test, ok, equal, strictEqual, deepEqual */

// Script globals
/* global minMax */

test("minMax.js tests", function() {
    var bigNumber = 100;
    var bigFloatNumber = 100.3221;
    var smallNumber = 7;
    var smallFloatNumber = 6.777777;
    var negNumber = -50;
    var zero = 0;

    ok(minMax(smallNumber, zero, bigNumber) === smallNumber, "Number within range");
    ok(minMax(negNumber, zero, bigNumber) === zero, "Number less than min");
    ok(minMax(bigNumber, zero, smallNumber) === smallNumber, "Number greater than max");

    ok(minMax(smallFloatNumber, zero, bigFloatNumber) === smallFloatNumber, "Float Number within range");
    ok(minMax(negNumber, zero, bigFloatNumber) === zero, "Float Number less than min");
    ok(minMax(bigFloatNumber, zero, smallFloatNumber) === smallFloatNumber, "Float Number greater than max");

    ok(minMax("string", zero, bigNumber) === "string", "String given");
    deepEqual(minMax({a: 1, b:2}, zero, bigNumber), {a: 1, b:2}, "Object given");
    deepEqual(minMax([1,2,3,4,5], zero, bigNumber), [1,2,3,4,5], "Array given");

    ok(minMax("", zero, bigNumber) === "", "Emnpty String given");
    deepEqual(minMax({}, zero, bigNumber), {}, "Empty Object given");
    deepEqual(minMax([], zero, bigNumber), [], "Empty Array given");
});