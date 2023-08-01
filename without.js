const { takeUntil } = require(".");

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


const without = function(source, itemsToRemove) {


  let containString = false;



  let newArr = source.slice();


  for (let item of itemsToRemove) {
    if (typeof item === "string") {
      containString = true;
  
    }
  }

  let currentIndex;

  for (let item in itemsToRemove) {
    currentIndex = item;
  
  }

  newArr.splice(currentIndex, 1);
  return (newArr);


};
/*

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

*/

/*

const without = function(source, itemsToRemove){

let currentIndex = 0;
let numResult = 0;
let newArr = source.slice()
console.log(newArr)

for(let item of itemsToRemove){
  //console.log(currentIndex)
  

  if(typeof item === "string"){


    //console.log(itemsToRemove.indexof(item))
    //let indexItem = item.indexof()
   
    
    
    
  }


  //console.log(newArr)
  
numResult = newArr.splice(item)


for (let item in itemsToRemove){
  currentIndex = item;


}



}




//if(itemsToRemove.includes()){}

  // return new array

// Clone an Array-sheeps.slice()

  // edge case: in the case that user puts down a quoted string, that takes priority and the new string then contains just the two numbers but as quotes

        /// checking data type
        //// typeof


        //////
 /*

                  console.log(typeof 42);
                  // Expected output: "number"

                  console.log(typeof 'blubber');
                  // Expected output: "string"

                  console.log(typeof true);
                  // Expected output: "boolean"

                  console.log(typeof undeclaredVariable);
                  // Expected output: "undefined"


                    "undefined"
                    Null	"object" (reason)
                    Boolean	"boolean"
                    Number	"number"
                    BigInt	"bigint"
                    String	"string"
                    Symbol	"symbol"
                    Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	                      "function"
                    Any other object	"object"

                    Basic usage:
                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/




/// checking if including
//// includes()


//////
/*

                      The includes() method returns true if an array contains a specified value.

                      The includes() method returns false if the value is not found.

                      The includes() method is case sensitive.



 */
//otherwise if it's numeric then the new array contains numbers that aren't in itemsToRemove

/*

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual([1,2,3],[1,2,4]);

*/

module.exports = without;