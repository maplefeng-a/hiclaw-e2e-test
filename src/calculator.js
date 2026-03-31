/**
 * Calculator module - basic arithmetic operations
 * @module calculator
 */

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 * @throws {TypeError} When inputs are not numbers or not finite
 * @example
 * add(2, 3); // returns 5
 * add(-1, 1); // returns 0
 */
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    if (!isFinite(a) || !isFinite(b)) {
        throw new TypeError('Arguments must be finite numbers');
    }
    return a + b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 * @throws {TypeError} When inputs are not numbers or not finite
 * @example
 * multiply(2, 3); // returns 6
 * multiply(-2, 3); // returns -6
 */
function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    if (!isFinite(a) || !isFinite(b)) {
        throw new TypeError('Arguments must be finite numbers');
    }
    return a * b;
}

// Export functions
module.exports = { add, multiply };
