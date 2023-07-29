/*
Function Definition
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.



*/

const eqArrays = (a, b) => {
  return a.toString() === b.toString();
};
  
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
};
  
  
  
//   assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
//   assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
  
//   assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
//   assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// => false


const assertArraysEqual = (a,b) => {
  if (a.toString() === b.toString()) {
    console.log(`✅✅✅Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${a}] !== [${b}]`);
        
  }
};
  
/*
const jahQuotes = ["that's cap", "bro fuck", "take that", "clappin it up", "no way bro", "bro you on drugs?", "wassup with that"];

const jahBot = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
};
const JizzyJah = jahBot(jahQuotes, skeet => skeet+"ahaaa haaa" )


*/

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
  

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);

assertEqual(eqArrays(results1, ["g", "c", "t", "m", "t"]), true); // => true
assertEqual(eqArrays(results2, ["r", "o", "o", "a","o"]), true);// => true
assertEqual(eqArrays(results3, ["g", "2", 3]), false);// => false


//console.log(results1);

//console.log(results1);