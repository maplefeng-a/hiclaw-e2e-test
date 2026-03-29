/**
 * Calculator Module Unit Tests
 * Tests for add() and multiply() functions including input validation.
 */

import { add, multiply } from '../src/calculator.js';

// Simple test runner
let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
    passed++;
  } catch (error) {
    console.log(`✗ ${name}`);
    console.log(`  Error: ${error.message}`);
    failed++;
  }
}

function assertEqual(actual, expected, message = '') {
  if (actual !== expected) {
    throw new Error(`${message} Expected ${expected}, got ${actual}`);
  }
}

function assertThrows(fn, message = '') {
  let threw = false;
  try {
    fn();
  } catch (e) {
    threw = true;
  }
  if (!threw) {
    throw new Error(`${message} Expected function to throw an error`);
  }
}

// ============== ADD FUNCTION TESTS ==============

console.log('\n=== add() Tests ===\n');

// Normal operation tests
test('add(2, 3) should return 5', () => {
  assertEqual(add(2, 3), 5);
});

test('add(0, 0) should return 0', () => {
  assertEqual(add(0, 0), 0);
});

test('add(100, 200) should return 300', () => {
  assertEqual(add(100, 200), 300);
});

test('add(0.5, 0.5) should return 1', () => {
  assertEqual(add(0.5, 0.5), 1);
});

test('add(-5, 10) should throw error (negative first argument)', () => {
  assertThrows(() => add(-5, 10));
});

test('add(5, -10) should throw error (negative second argument)', () => {
  assertThrows(() => add(5, -10));
});

test('add(-5, -10) should throw error (both negative)', () => {
  assertThrows(() => add(-5, -10));
});

test('add("2", 3) should throw error (string first argument)', () => {
  assertThrows(() => add("2", 3));
});

test('add(2, "3") should throw error (string second argument)', () => {
  assertThrows(() => add(2, "3"));
});

test('add(null, 5) should throw error (null first argument)', () => {
  assertThrows(() => add(null, 5));
});

test('add(5, undefined) should throw error (undefined second argument)', () => {
  assertThrows(() => add(5, undefined));
});

// ============== MULTIPLY FUNCTION TESTS ==============

console.log('\n=== multiply() Tests ===\n');

// Normal operation tests
test('multiply(2, 3) should return 6', () => {
  assertEqual(multiply(2, 3), 6);
});

test('multiply(0, 5) should return 0', () => {
  assertEqual(multiply(0, 5), 0);
});

test('multiply(5, 0) should return 0', () => {
  assertEqual(multiply(5, 0), 0);
});

test('multiply(1, 100) should return 100', () => {
  assertEqual(multiply(1, 100), 100);
});

test('multiply(10, 10) should return 100', () => {
  assertEqual(multiply(10, 10), 100);
});

test('multiply(0.5, 10) should return 5', () => {
  assertEqual(multiply(0.5, 10), 5);
});

test('multiply(-2, 5) should throw error (negative first argument)', () => {
  assertThrows(() => multiply(-2, 5));
});

test('multiply(2, -5) should throw error (negative second argument)', () => {
  assertThrows(() => multiply(2, -5));
});

test('multiply(-2, -5) should throw error (both negative)', () => {
  assertThrows(() => multiply(-2, -5));
});

test('multiply("2", 3) should throw error (string first argument)', () => {
  assertThrows(() => multiply("2", 3));
});

test('multiply(2, "3") should throw error (string second argument)', () => {
  assertThrows(() => multiply(2, "3"));
});

test('multiply(null, 5) should throw error (null first argument)', () => {
  assertThrows(() => multiply(null, 5));
});

test('multiply(5, undefined) should throw error (undefined second argument)', () => {
  assertThrows(() => multiply(5, undefined));
});

// ============== SUMMARY ==============

console.log('\n=== Test Summary ===\n');
console.log(`Total: ${passed + failed}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('\n✓ All tests passed!\n');
  process.exit(0);
}
