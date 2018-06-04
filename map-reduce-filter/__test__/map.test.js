const map = require('../map.js');

describe('MAP', () => {
  test('Performs the argument callback of adding 10 to each int in the array and returns a new array with correct changes', () => {
    const input = [0, 10, 20, 30, 40, 100, -20];
    const output = [10, 20, 30, 40, 50, 110, -10];
    const callback = (element) => element + 10;

    expect(map(input, callback)).toEqual(output);
  });
  test('Returns an error if first argument is not an array', () => {
    const input = 'badInput';
    const callback = (element) => element + 10;

    expect(() => map(input, callback)).toThrow();
  });

  test('Performs the argument callback of adding a property to each element object array of objects and returns a new array with correct changes', () => {
    function MyObject(prop1) {
      this[prop1] = prop1;
    }

    const testObject = new MyObject('testPropOne');

    const input = [testObject, new MyObject('testPropTwo'), new MyObject('testPropThree')];

    const output = [
      {
        addedProperty: 'Added Prop Val',
        testPropOne: 'testPropOne',
      },
      {
        addedProperty: 'Added Prop Val',
        testPropTwo: 'testPropTwo',
      },
      {
        addedProperty: 'Added Prop Val',
        testPropThree: 'testPropThree',
      },
    ];
    const callback = (element) => {
      const result = { ...element };
      result.addedProperty = 'Added Prop Val';
      return result;
    };

    expect(map(input, callback)).toEqual(output);
  });
});

