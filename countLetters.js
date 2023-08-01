const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
};

const countLetters = function(str) {
  const strLowercase = str.toLowerCase();
  
  const result = {};
  
  /*
  
    for (let letter of strLowercase) {
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else {
        result[letter]++;
      }
    }
  
   */
    
  for (let i = 0; i < strLowercase.length; i++) {
    if (strLowercase[i] !== " ") {
      console.log(i);
      if (result [strLowercase[i]] === undefined) {
          
        result[strLowercase[i]] = [i];
      } else {
        result[strLowercase[i]].push(i);
      }
    }
  }
  return result;
};
  
module.exports = countLetters;
  
//console.log(countLetters("check me out!"));
//assertArraysEqual(letterPositions("hello").e, [1]);