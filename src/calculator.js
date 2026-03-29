/**
 * Calculator Module
 * Provides basic arithmetic operations with input validation.
 */

/**
 * Adds two numbers together.
 * @param {number} a - The first number (must be non-negative).
 * @param {number} b - The second number (must be non-negative).
 * @returns {number} The sum of a and b.
 * @throws {Error} If inputs are not non-negative numbers.
 * @example
 * // returns 5
 * add(2, 3);
 */
export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    throw new Error('Inputs must be non-negative numbers');
  }
  return a + b;
}

/**
 * Multiplies two numbers together.
 * @param {number} a - The first number (must be non-negative).
 * @param {number} b - The second number (must be non-negative).
 * @returns {number} The product of a and b.
 * @throws {Error} If inputs are not non-negative numbers.
 * @example
 * // returns 6
 * multiply(2, 3);
 */
export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    throw new Error('Inputs must be non-negative numbers');
  }
  return a * b;
}
