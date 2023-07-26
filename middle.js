const assertArraysEqual = (a,b) => {
  if (a.toString() === b.toString()) {
    console.log(`✅✅✅Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${a}] !== [${b}]`);
        
  }
};

const eqArrays = (a, b) => {
  return a.toString() === b.toString();
};
  
const middle = (arr) => {
  let returnedArr = [];
    
  if (arr.length <= 2) {
    console.log(returnedArr);
    return returnedArr;
  }

  if (arr.length % 2 === 0) {
    let arrHalfLength = arr.length / 2;
    returnedArr.push(arr[arrHalfLength - 1], arr  [arrHalfLength]);
  }
    
  if (arr.length % 2 !== 0) {
    returnedArr.push((arr.length - 1) / 2 + 1);
  }
        
    
    
  console.log(returnedArr);
  return returnedArr;
};

//assertArraysEqual([1,2,3],[1,2,4]);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true

//assertEqual(head([5,6,7]), 5);

assertArraysEqual(eqArrays(middle([1]), []), true);
assertArraysEqual(eqArrays(middle([1, 2]), []), true);
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4]), true);
assertArraysEqual(eqArrays(middle([1, 2]), []), true);


// find middle of array
//    this likely means finding length of array and checking to see if it is %2 === 0
// edge case: if there are one or two elements return empty array
// identify if number is odd or even
//      if odd a single middle element is returned
//      if even an array containing the two elements in the middle should be returned

// return array of middle element(s)

