/**
 * Helper function to get a value from a object with a dot-notated String
 * 
 * @param  {object} obj         [description]
 * @param  {string} indexString Dot-notaded path string for the property to get
 * @return {mixed}              The property given through the path string,
 *                              or the object itself, when indexString is a falsy value
 *                              or undefined, when the indexString is invalid or not in the object
 */
function objectGet(obj, indexString) {
    "use strict";
    var currentIndex;
    if (!indexString) {
        return obj;
    }
    indexString = (typeof indexString === "string") ? indexString.split('.') : indexString;
    currentIndex = ('shift' in indexString) ? indexString.shift() : undefined;

    return (typeof obj[currentIndex] !== "undefined") ? ((indexString.length > 0) ? objectGet(obj[currentIndex], indexString) : obj[currentIndex]) : undefined;
}