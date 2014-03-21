/**
 * Pad a string/number num with a character padCharacter to the length l
 *
 * @param  {string|number} num    String to pad (Number will be cast to a string)
 * @param  {number} len           Desired length the result string should be
 * @param  {string} padCharacter  Character to pad with
 * @return {string}     padded result string
 */
(function() {
    'use strict';

    function pad(num, len, padCharacter) {
        padCharacter = padCharacter || '0';
        num = num + '';
        return num.length >= len ? num : new Array(len - num.length + 1).join(padCharacter) + num;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = pad;
    } else {
        window.pad = pad;
    }
})();