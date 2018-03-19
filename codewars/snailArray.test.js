const snail = require('./snailArray');

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

describe('Solution', () => {
  it('Should Pass with basic 3x3 2d array', () => {
    expect(snail(array)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('Should Pass with basic 4x3 2d array', () => {
    expect(snail(arrayTwo)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 5, 6, 7, 11, 10]);
  });
  
  it('Should Pass with complicated 5x5 array', () => {
    expect(snail(arrayThree)).toEqual([
      1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22,
      21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  });

  it('Should Pass with basic empty array', () => {
    expect(snail([[]])).toEqual([[]]);
  });
});

