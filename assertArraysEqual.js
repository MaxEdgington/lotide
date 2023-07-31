const eqArrays = require('./eqArrays');


const assertArraysEqual = (actual, expected) => {
  if (eqArrays) {
    console.log("✅✅✅Assertion Passed: ", actual, " === ", expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", actual, " !== ", expected);
      
  }
};

module.exports = assertArraysEqual;

