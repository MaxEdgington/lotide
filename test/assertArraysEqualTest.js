
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns false for is [1, 2, 3] === [1,2,4] ", () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,4]), false);
  });
  
});


//assertArraysEqual(eqArrays([1,2,3],[1,2,4]), false);