const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
};
  
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
const findKeyByValue = (object, value) => {
  for (const key in object) {
    const valueForKey = object[key];
  
    if (valueForKey === value) {
  
      // we can also just say (if object[key] === value) and delete const valueForKey
      return key;
    }
    console.log(`${key} ${valueForKey}`);
  }
}
  ;
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);