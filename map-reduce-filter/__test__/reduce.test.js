const reduce = require('../map-reduce-filter');

describe('REDUCE', () => {
  test('Applies a sum callback against an accumulator and each element in the int array from left to right to reduce the array to a single sum', () => {
    const input = [0, 10, 20, 30, 40, 50, 60];
    const output = 210;
    const callback = ((acc, ele) => acc + ele);

    expect(input.myReduce(callback)).toEqual(output);
    expect([10, 20, 30].myReduce(callback)).toEqual(60);
    expect([-100, 20, 30].myReduce(callback)).toEqual(-50);
  });

  test('Applies a concat callback against an accumulator and each element in the string array from left to right to reduce the array to a single string', () => {
    const input = ['a', 'b', 'c', 'd', 'e', 'f'];
    const output = 'abcdef';
    const callback = ((acc, ele) => acc + ele);

    expect(input.myReduce(callback)).toEqual(output);
  });
});
