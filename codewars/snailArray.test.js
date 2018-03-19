const snail = require('./snailArraySecond');

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

const arrayThree = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const arrayFour = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];

const arrayFive = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42],
  [43, 44, 45, 46, 47, 48, 49],
];

describe('Solution', () => {
  it('Should Pass with basic 3x3 2d array', () => {
    expect(snail(array)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('Should Pass with basic 4x4 2d array', () => {
    expect(snail(arrayTwo)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });
  
  it('Should Pass with complicated 5x5 array', () => {
    expect(snail(arrayThree)).toEqual([
      1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22,
      21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  });

  it('Should Pass with complicated 6x6 array', () => {
    expect(snail(arrayFour)).toEqual([1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35,
      34, 33, 32, 31, 25, 19, 13, 7, 8, 9, 10, 11,
      17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21,
    ]);
  });

  it('Should Pass with complicated 7x7 array', () => {
    expect(snail(arrayFive)).toEqual([1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 35, 42, 49, 48, 47,
      46, 45, 44, 43, 36, 29, 22, 15, 8, 9, 10, 11,
      12, 13, 20, 27, 34, 41, 40, 39, 38, 37, 30, 23,
      16, 17, 18, 19, 26, 33, 32, 31, 24, 25]);
  });

  it('Should Return empty array with input of empty 2d array or empty array', () => {
    expect(snail([[]])).toEqual([]);
    expect(snail([[1]])).toEqual([1]);
    expect(snail([])).toEqual([]);
  });

  it('Should return null is array is not square', () => {
    expect(snail([[1, 2, 3], [4, 5, 6]])).toBeNull();
  });
});

