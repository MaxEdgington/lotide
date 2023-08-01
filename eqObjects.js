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
  
  
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
    


  // make sure object is same size
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for (let key of Object.keys(object1)) {

    if (!object2.hasOwnProperty(key)) {
      return false;
    }

    //
    const objectKeysNotEqual = object1[key] !== object2[key];


    if (!Array.isArray(object1[key]) && objectKeysNotEqual) {
      return false;
    }

    if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
      return false;

    }
  }
  return true;
};

/*
  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
  
assertEqual(eqObjects(shirtObject, anotherShirtObject),true); // => true
  
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false
  
assertEqual(1, 1);
  
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true
  
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

*/

module.exports = eqObjects;