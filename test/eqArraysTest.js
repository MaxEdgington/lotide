const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns true", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
  });
  
  it("returns false", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});


