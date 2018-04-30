'use strict';

const LinkedList = require('./linked-list');

module.exports = class Stack {
  constructor() {
    this._storage = new LinkedList();
  }

  push(value) {
    this._storage.insertAtEnd(value);
  }

  pop() {
    return this._storage.popLastNode();
  }

  peek() {
    return this._storage.lastNodeValue();
  }

  isEmpty() {
    return !this._storage.head;
  }
};
