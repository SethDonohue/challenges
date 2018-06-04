const filter = require('../filter');

describe('FILTER', () => {
  test('Applies a callback to each element and if callback is true pushes the element to a new array and returns the resulting array with the filtered elements', () => {
    const input = [0, 10, 20, 30, 40, 50, 60];
    const output = [0, 10, 20, 30];
    const strInput = ['hi', 'hello', 'jefhsakjfksahf', 'world', '10'];
    const strNumInput = ['hi', 20, 'hello', 'jefhsakjfksahf', 'world', 10];

    expect(filter(input, ele => ele < 40)).toEqual(output);
    expect(filter(input, ele => ele >= 40)).toEqual([40, 50, 60]);


    expect(filter(strInput, ele => ele.length > 3)).toEqual(['hello', 'jefhsakjfksahf', 'world']);
    expect(filter(strInput, ele => ele.length < 3)).toEqual(['hi', '10']);
    expect(filter(strInput, ele => ele.includes('10'))).toEqual(['10']);

    expect(filter(strNumInput, (ele => {
      if (typeof ele === 'string') return true;
    }))).toEqual(['hi', 'hello', 'jefhsakjfksahf', 'world']);
  });
});
