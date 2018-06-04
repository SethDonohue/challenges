// Implement the native Array.prototype.reduce methid in vanilla JS.

// The reduce() method applies a function against an accumulator and
// each element in the array(from left to right) to reduce it to a single value.

const reduce = (array, callback) => {
  let accumulator = array[0];
  for (let i = 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
};

module.exports = reduce;
