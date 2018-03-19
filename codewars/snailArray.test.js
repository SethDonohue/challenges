const snail = require('./snailArray');

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const arrayTwo = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

describe('Solution', () => {
  it('Should Pass with basic 3x3 2d array', () => {
    // Test.assertEquals(snail(array), [1, 2, 3, 6, 9, 8, 7, 4, 5], "Did not pass the basic 3x3 test");
    expect(snail(array)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('Should Pass with basic 4x3 2d array', () => {
    // Test.assertEquals(snail(array), [1, 2, 3, 6, 9, 8, 7, 4, 5], "Did not pass the basic 3x3 test");
    expect(snail(arrayTwo)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 5, 6, 7, 11, 10]);
  });

  it('Should Pass with basic empty array', () => {
    // Test.assertEquals(snail(array), [1, 2, 3, 6, 9, 8, 7, 4, 5], "Did not pass the basic 3x3 test");
    expect(snail([[]])).toEqual([[]]);
  });
});
