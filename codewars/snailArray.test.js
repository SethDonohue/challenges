const snail = require('./snailArray');

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
describe('Solution', () => {
  it('Should Pass with basic 3x3 2d array', () => {
    // Test.assertEquals(snail(array), [1, 2, 3, 6, 9, 8, 7, 4, 5], "Did not pass the basic 3x3 test");
    expect(snail(array)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});
