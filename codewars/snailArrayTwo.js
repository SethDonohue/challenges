const snail = (array) => {
  let result = null;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (let i = 0; i < array.length; i++) result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (let i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
  return result;
};


const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arrayTwo = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// console.log(snail(array));
console.log(snail(arrayTwo));
