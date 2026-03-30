/**
 * Calculator Module
 * Provides basic arithmetic operations with input validation
 */

/**
 * Adds two numbers
 * @param {number} a - First number (must be non-negative)
 * @param {number} b - Second number (must be non-negative)
 * @returns {number} Sum of a and b
 * @throws {Error} If either number is negative
 */
function add(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("Negative numbers are not allowed");
  }
  return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number (must be non-negative)
 * @param {number} b - Second number (must be non-negative)
 * @returns {number} Product of a and b
 * @throws {Error} If either number is negative
 */
function multiply(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("Negative numbers are not allowed");
  }
  return a * b;
}

module.exports = { add, multiply };
