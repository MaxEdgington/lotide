
const assertArraysEqual = (a,b) => {
  if (a.toString() === b.toString()) {
    console.log(`✅✅✅Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${a}] !== [${b}]`);
        
  }
};
  
const letterPositions = function(str) {
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
  
module.exports = letterPositions;
  
//console.log(letterPositions("check me out!"));

//assertArraysEqual(letterPositions("hello").e, [1]);