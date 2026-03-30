const { add, multiply } = require('../src/calculator');

describe('Calculator', () => {
  describe('add()', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds zero values', () => {
      expect(add(0, 0)).toBe(0);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
    });

    test('adds decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('throws TypeError for non-number inputs (string)', () => {
      expect(() => add('2', 3)).toThrow(TypeError);
      expect(() => add(2, '3')).toThrow(TypeError);
      expect(() => add('2', '3')).toThrow(TypeError);
    });

    test('throws TypeError for non-number inputs (null/undefined)', () => {
      expect(() => add(null, 3)).toThrow(TypeError);
      expect(() => add(2, undefined)).toThrow(TypeError);
      expect(() => add(null, null)).toThrow(TypeError);
    });

    test('throws TypeError for non-number inputs (object)', () => {
      expect(() => add({}, 3)).toThrow(TypeError);
      expect(() => add(2, [])).toThrow(TypeError);
    });

    test('throws Error for negative numbers (first argument)', () => {
      expect(() => add(-1, 5)).toThrow(Error);
      expect(() => add(-10, 3)).toThrow(Error);
    });

    test('throws Error for negative numbers (second argument)', () => {
      expect(() => add(5, -1)).toThrow(Error);
      expect(() => add(3, -10)).toThrow(Error);
    });

    test('throws Error for negative numbers (both arguments)', () => {
      expect(() => add(-1, -5)).toThrow(Error);
    });
  });

  describe('multiply()', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies with zero values', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('multiplies decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(0.5, 0.5)).toBe(0.25);
    });

    test('throws TypeError for non-number inputs (string)', () => {
      expect(() => multiply('3', 4)).toThrow(TypeError);
      expect(() => multiply(3, '4')).toThrow(TypeError);
      expect(() => multiply('3', '4')).toThrow(TypeError);
    });

    test('throws TypeError for non-number inputs (null/undefined)', () => {
      expect(() => multiply(null, 4)).toThrow(TypeError);
      expect(() => multiply(3, undefined)).toThrow(TypeError);
      expect(() => multiply(null, null)).toThrow(TypeError);
    });

    test('throws TypeError for non-number inputs (object)', () => {
      expect(() => multiply({}, 4)).toThrow(TypeError);
      expect(() => multiply(3, [])).toThrow(TypeError);
    });

    test('throws Error for negative numbers (first argument)', () => {
      expect(() => multiply(-2, 5)).toThrow(Error);
      expect(() => multiply(-10, 3)).toThrow(Error);
    });

    test('throws Error for negative numbers (second argument)', () => {
      expect(() => multiply(5, -2)).toThrow(Error);
      expect(() => multiply(3, -10)).toThrow(Error);
    });

    test('throws Error for negative numbers (both arguments)', () => {
      expect(() => multiply(-2, -5)).toThrow(Error);
    });
  });
});
