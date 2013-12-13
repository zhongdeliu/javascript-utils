/**
 * Determines if a number is within [min, max] and returns it (or the capped values)
 * @param  {number} value Value to check
 * @param  {number} min   Minimum value
 * @param  {number} max   Maximum value
 * @return {number} capped value
 */
function minMax(value, min, max) {
    if (typeof value !== "number") {
        return value;
    } else {
        value = Number(value);
    }
    min = Number(min);
    max = Number(max);

    return (value <= min) ? min : (value >= max) ? max : value;
}