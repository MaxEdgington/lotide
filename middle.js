const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
  
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

module.exports = middle;

//assertArraysEqual([1,2,3],[1,2,4]);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true

//assertEqual(head([5,6,7]), 5);




// find middle of array
//    this likely means finding length of array and checking to see if it is %2 === 0
// edge case: if there are one or two elements return empty array
// identify if number is odd or even
//      if odd a single middle element is returned
//      if even an array containing the two elements in the middle should be returned

// return array of middle element(s)

