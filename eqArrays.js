const assertEqual = require('./assertEqual');


const eqArrays = (a, b) => {

  for (let val of a) {
    if (!b.includes(val)) {
      return false;
    }
  }
  
  return a.toString() === b.toString();
};
  

module.exports = eqArrays;





