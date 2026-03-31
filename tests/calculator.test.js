/**
 * Unit tests for calculator module
 * @jest-environment node
 */

const calculator = require('../src/calculator');
const { add, multiply } = calculator;

describe('Calculator Module', () => {
    describe('add(a, b)', () => {
        // 正常情况测试
        describe('Normal cases', () => {
            test('adds two positive numbers', () => {
                expect(add(2, 3)).toBe(5);
                expect(add(100, 200)).toBe(300);
            });

            test('adds two negative numbers', () => {
                expect(add(-2, -3)).toBe(-5);
                expect(add(-100, -200)).toBe(-300);
            });

            test('adds positive and negative numbers', () => {
                expect(add(5, -3)).toBe(2);
                expect(add(-5, 3)).toBe(-2);
            });

            test('adds zero', () => {
                expect(add(0, 5)).toBe(5);
                expect(add(5, 0)).toBe(5);
                expect(add(0, 0)).toBe(0);
            });

            test('adds decimal numbers', () => {
                expect(add(1.5, 2.5)).toBe(4);
                expect(add(0.1, 0.2)).toBeCloseTo(0.3);
            });
        });

        // 边界情况测试
        describe('Edge cases', () => {
            test('handles Infinity', () => {
                expect(() => add(Infinity, 1)).toThrow(TypeError);
                expect(() => add(1, Infinity)).toThrow(TypeError);
            });

            test('handles -Infinity', () => {
                expect(() => add(-Infinity, 1)).toThrow(TypeError);
                expect(() => add(1, -Infinity)).toThrow(TypeError);
            });

            test('handles NaN', () => {
                expect(() => add(NaN, 1)).toThrow(TypeError);
                expect(() => add(1, NaN)).toThrow(TypeError);
            });
        });

        // 异常情况测试
        describe('Exception cases', () => {
            test('throws TypeError for string input', () => {
                expect(() => add('5', '3')).toThrow(TypeError);
                expect(() => add('5', 3)).toThrow(TypeError);
                expect(() => add(5, '3')).toThrow(TypeError);
            });

            test('throws TypeError for null input', () => {
                expect(() => add(null, 5)).toThrow(TypeError);
                expect(() => add(5, null)).toThrow(TypeError);
            });

            test('throws TypeError for undefined input', () => {
                expect(() => add(undefined, 5)).toThrow(TypeError);
                expect(() => add(5, undefined)).toThrow(TypeError);
            });

            test('throws TypeError for object input', () => {
                expect(() => add({}, 5)).toThrow(TypeError);
                expect(() => add(5, {})).toThrow(TypeError);
            });

            test('throws TypeError for array input', () => {
                expect(() => add([], 5)).toThrow(TypeError);
                expect(() => add(5, [])).toThrow(TypeError);
            });

            test('throws TypeError for boolean input', () => {
                expect(() => add(true, 5)).toThrow(TypeError);
                expect(() => add(5, false)).toThrow(TypeError);
            });
        });
    });

    describe('multiply(a, b)', () => {
        // 正常情况测试
        describe('Normal cases', () => {
            test('multiplies two positive numbers', () => {
                expect(multiply(2, 3)).toBe(6);
                expect(multiply(10, 20)).toBe(200);
            });

            test('multiplies two negative numbers', () => {
                expect(multiply(-2, -3)).toBe(6);
                expect(multiply(-10, -20)).toBe(200);
            });

            test('multiplies positive and negative numbers', () => {
                expect(multiply(5, -3)).toBe(-15);
                expect(multiply(-5, 3)).toBe(-15);
            });

            test('multiplies by zero', () => {
                expect(multiply(0, 5)).toBe(0);
                expect(multiply(5, 0)).toBe(0);
                expect(multiply(0, 0)).toBe(0);
            });

            test('multiplies by one', () => {
                expect(multiply(1, 5)).toBe(5);
                expect(multiply(5, 1)).toBe(5);
            });

            test('multiplies decimal numbers', () => {
                expect(multiply(1.5, 2)).toBe(3);
                expect(multiply(0.5, 0.5)).toBe(0.25);
            });
        });

        // 边界情况测试
        describe('Edge cases', () => {
            test('handles Infinity', () => {
                expect(() => multiply(Infinity, 2)).toThrow(TypeError);
                expect(() => multiply(2, Infinity)).toThrow(TypeError);
            });

            test('handles -Infinity', () => {
                expect(() => multiply(-Infinity, 2)).toThrow(TypeError);
                expect(() => multiply(2, -Infinity)).toThrow(TypeError);
            });

            test('handles NaN', () => {
                expect(() => multiply(NaN, 2)).toThrow(TypeError);
                expect(() => multiply(2, NaN)).toThrow(TypeError);
            });
        });

        // 异常情况测试
        describe('Exception cases', () => {
            test('throws TypeError for string input', () => {
                expect(() => multiply('5', '3')).toThrow(TypeError);
                expect(() => multiply('5', 3)).toThrow(TypeError);
                expect(() => multiply(5, '3')).toThrow(TypeError);
            });

            test('throws TypeError for null input', () => {
                expect(() => multiply(null, 5)).toThrow(TypeError);
                expect(() => multiply(5, null)).toThrow(TypeError);
            });

            test('throws TypeError for undefined input', () => {
                expect(() => multiply(undefined, 5)).toThrow(TypeError);
                expect(() => multiply(5, undefined)).toThrow(TypeError);
            });

            test('throws TypeError for object input', () => {
                expect(() => multiply({}, 5)).toThrow(TypeError);
                expect(() => multiply(5, {})).toThrow(TypeError);
            });

            test('throws TypeError for array input', () => {
                expect(() => multiply([], 5)).toThrow(TypeError);
                expect(() => multiply(5, [])).toThrow(TypeError);
            });

            test('throws TypeError for boolean input', () => {
                expect(() => multiply(true, 5)).toThrow(TypeError);
                expect(() => multiply(5, false)).toThrow(TypeError);
            });
        });
    });
});
