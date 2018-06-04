const map = require('../map.js');

describe('MAP', () => {
  test('Performs the argument callback of adding 10 to each int in the array and returns a new array with correct changes', () => {
    const input = [0, 10, 20, 30, 40, 100, -20];
    const output = [10, 20, 30, 40, 50, 110, -10];
    const callback = (element) => element + 10;

    expect(map(input, callback)).toEqual(output);
  });
});

