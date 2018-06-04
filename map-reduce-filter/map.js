// Implement the native Array.prototype.map method in Vanilla JS

// The map() method creates a new array with the results of calling a 
// provided function on every element in the calling array.

const map = (array, callback) => {
  if (typeof array !== 'object') throw Error('Must use an array as first argument.');
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

module.exports = map;
