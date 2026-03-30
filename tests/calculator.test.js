/**
 * Calculator Module Unit Tests
 * Tests for src/calculator.js
 */

const { add, multiply } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    describe('when adding two positive numbers', () => {
      test('adds 2 and 3 to equal 5', () => {
        expect(add(2, 3)).toBe(5);
      });
      
      test('adds 0 and 0 to equal 0', () => {
        expect(add(0, 0)).toBe(0);
      });
      
      test('adds 10 and 20 to equal 30', () => {
        expect(add(10, 20)).toBe(30);
      });
    });
    
    describe('when adding negative numbers', () => {
      test('throws error when first number is negative', () => {
        expect(() => add(-1, 2)).toThrow('Negative numbers are not allowed');
      });
      
      test('throws error when second number is negative', () => {
        expect(() => add(1, -2)).toThrow('Negative numbers are not allowed');
      });
      
      test('throws error when both numbers are negative', () => {
        expect(() => add(-1, -2)).toThrow('Negative numbers are not allowed');
      });
    });
  });
  
  describe('multiply', () => {
    describe('when multiplying two positive numbers', () => {
      test('multiplies 3 and 4 to equal 12', () => {
        expect(multiply(3, 4)).toBe(12);
      });
      
      test('multiplies 0 and 5 to equal 0', () => {
        expect(multiply(0, 5)).toBe(0);
      });
      
      test('multiplies 10 and 10 to equal 100', () => {
        expect(multiply(10, 10)).toBe(100);
      });
    });
    
    describe('when multiplying negative numbers', () => {
      test('throws error when first number is negative', () => {
        expect(() => multiply(-2, 3)).toThrow('Negative numbers are not allowed');
      });
      
      test('throws error when second number is negative', () => {
        expect(() => multiply(2, -3)).toThrow('Negative numbers are not allowed');
      });
      
      test('throws error when both numbers are negative', () => {
        expect(() => multiply(-2, -3)).toThrow('Negative numbers are not allowed');
      });
    });
  });
});
