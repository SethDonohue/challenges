const snail = (array) => {
  const answer = [];
  for (let size = array.length, i = 0, j = 0; size > 0; size -= 2, ++j) {
    for (let k = 0; k < size - 1; ++k, ++j) answer.push(array[i][j]);
    for (let k = 0; k < size - 1; ++k, ++i) answer.push(array[i][j]);
    for (let k = 0; k < size - 1; ++k, --j) answer.push(array[i][j]);
    for (let k = 0; k < size - 2; ++k, --i) answer.push(array[i][j]);
    if (array[i][j]) answer.push(array[i][j]);
  }
  return answer;
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
