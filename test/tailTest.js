const tail = require('../tail.js');
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns shorter array", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  

});



/*
// TEST CODE

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/