# javascript-utils

Snippets collection for Javascript Daily Tasks

    /**
     * Determines if a number is within [min, max] and returns it (or the capped values)
     * @param  {number} value Value to check
     * @param  {number} min   Minimum value
     * @param  {number} max   Maximum value
     * @return {number} capped value
     */
    function minMax(value, min, max)

    /**
     * Helper function to get a value from a object with a dot-notated String
     * 
     * @param  {object} obj         [description]
     * @param  {string} indexString Dot-notaded path string for the property to get
     * @return {mixed}              The property given through the path string,
     *                              or the object itself, when indexString is a falsy value
     *                              or undefined, when the indexString is invalid or not in the object
     */
    function objectGet(obj, indexString)

## Development

Copy and implement `_dummy.js` files in `scripts/` and `tests/` folder.

## Tests

Run `mocha` in order to execute the unit tests.

## License

The MIT License (MIT) - zhongdeliu