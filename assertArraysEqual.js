

const assertArraysEqual = (a,b) => {
  if (a.toString() === b.toString()) {
    console.log(`✅✅✅Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${a}] !== [${b}]`);
      
  }
};

assertArraysEqual([1,2,3],[1,2,4]);