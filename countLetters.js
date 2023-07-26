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

  for (let letter of strLowercase) {
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
};

console.log(countLetters("check me out!"));