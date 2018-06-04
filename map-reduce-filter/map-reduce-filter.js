// Implement the native Array.prototype map() filter() reduce() methods in Vanilla JS

// The map() method creates a new array with the results of calling a 
// provided function on every element in the calling array.

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.myReduce = function(callback) {
  let accumulator = this[0];
  for (let i = 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};


module.exports = Array;
