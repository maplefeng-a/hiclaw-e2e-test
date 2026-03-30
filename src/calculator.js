/**
 * Calculator Module
 * Provides basic arithmetic operations with input validation.
 */

/**
 * Add two numbers
 * @param {number} a - First number (must be non-negative)
 * @param {number} b - Second number (must be non-negative)
 * @returns {number} Sum of a and b
 * @throws {TypeError} If inputs are not numbers
 * @throws {Error} If inputs are negative
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both inputs must be numbers');
  }
  if (a < 0 || b < 0) {
    throw new Error('Inputs cannot be negative');
  }
  return a + b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number (must be non-negative)
 * @param {number} b - Second number (must be non-negative)
 * @returns {number} Product of a and b
 * @throws {TypeError} If inputs are not numbers
 * @throws {Error} If inputs are negative
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both inputs must be numbers');
  }
  if (a < 0 || b < 0) {
    throw new Error('Inputs cannot be negative');
  }
  return a * b;
}

module.exports = { add, multiply };