const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns true", () => {
    assert.strictEqual(eqArrays(middle([1]), []), true);
  });
  
  it("returns true", () => {
    assert.strictEqual(eqArrays(middle([1, 2]), []), true);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3]), [2]), true);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]), true);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays(middle([1, 2]), []), true);
  });







});

/*
assert.strictEqual(eqArrays(middle([1]), []), true);
assert.strictEqual(eqArrays(middle([1, 2]), []), true);
assert.strictEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]), true);
assert.strictEqual(eqArrays(middle([1, 2]), []), true);

*/