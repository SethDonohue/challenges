import { reverse } from '../reverseLL';

const LinkedList = require('../linked-list');

const util = require('util');

describe('Reversing a LinkedList', () => {
  test('Should take in a LinkedList and reverse it in place', ()=> {
    const testListOne = new LinkedList();
    testListOne.append(1);
    testListOne.append(2);
    testListOne.append(3);
    testListOne.append(4);
    expect(testListOne.head.next.next.next.value).toEqual(4);

    const testListTwo = new LinkedList();
    testListTwo.append(4);
    testListTwo.append(3);
    testListTwo.append(2);
    testListTwo.append(1);
    expect(testListTwo.head.next.next.next.value).toEqual(1);

    console.log(testListOne);
    console.log(util.inspect(testListOne, { showHidden: false, depth: null }))
    expect(reverseLL(testListOne)).toEqual(testListTwo);
    console.log(util.inspect(testListOne, { showHidden: false, depth: null }))
  })
})
