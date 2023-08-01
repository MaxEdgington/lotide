const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (arr.length > 0) {
    return (arr.slice(1));
  } else {
    return undefined;
  }
};

module.exports = tail;

