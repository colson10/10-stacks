'use strict';

const Stack = require('../lib/stack');

describe('Testing our Stack constructor methods', () => {
  test('#constructor', () => {
    const testStack = new Stack();
    expect(testStack._storage.head).toBeNull();
  });

  test('push method should add a value to the end of the stack storage', () => {
    const testStack = new Stack();
    testStack.push(1);
    testStack.push(2);
    testStack.push(100);
    expect(testStack._storage.head.value).toEqual(1);
    expect(testStack._storage.head.next.value).toEqual(2);
    expect(testStack._storage.head.next.next.value).toEqual(100);
  });

  test('pop method should return the value of the last node/data and remove the node/data from storage', () => {
    const testStack = new Stack();
    testStack.push(1);
    testStack.push(2);
    const node = testStack._storage.head.next.value;
    const poppedVal = testStack.pop();
    expect(poppedVal).toEqual(node);
    const node1 = testStack._storage.head.value;
    expect(testStack.pop()).toEqual(node1);
  });

  test('peek method should return the value of the last node/data in storage but not remove the node/data', () => {
    const testStack = new Stack();
    testStack.push(1);
    testStack.push(2);
    expect(testStack._storage.head.value).toEqual(1);
    expect(testStack._storage.head.next.value).toEqual(2);
    const lastVal = testStack._storage.head.next.value;
    expect(testStack.peek()).toEqual(lastVal);
    testStack.pop();
    expect(testStack.peek()).toEqual(testStack._storage.head.value);
  });

  test('isEmpty array should check if the storage is empty by checking if the head of the linked list is null', () => {
    const testStack = new Stack();
    expect(testStack.isEmpty()).toEqual(true);
    testStack.push(1);
    expect(testStack.isEmpty()).toEqual(false);
  });
});
