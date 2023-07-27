const eqObjects = function(object1, object2) {
    
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
    
  for (let key of Object.keys(object1)) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    }
    if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    }
    if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
} else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


  
const assertArraysEqual = (a,b) => {
  if (a.toString() === b.toString()) {
    console.log(`✅✅✅Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${a}] !== [${b}]`);
        
  }
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false