# Lab 10 - Stacks

**Author**: Carl Olson
**Version**: 1.0.0

## Overview
This lab project focused on writing methods on a Stack Class using a Linked List Class as the storage module. This is implementing a LIFO (last in, first out) method of storage.


The ```push(value)``` method adds a node and value to the end/top of the storage. It implements the ```insertAtEnd(value)``` method on the Linked List _storage property on the Stack Class:
```
  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }
  ```

The ```pop()``` method on the Stack Class implements the ```popLastNode()``` method on the Linked List _storage property of the Stack:
```
  popLastNode() {
    if (!this.head) return null;
    let currentNode = this.head;
    
    if (!currentNode.next) {
      const poppedValue = currentNode.value;
      currentNode = null;
      return poppedValue;
    }

    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const poppedValue = currentNode.next.value;
    currentNode.next = null;
    return poppedValue;
  }
  ```

  The ```peek()``` method on the Stack Class returns the value of the last/top node in storage, utilizing the ```lastNodeValue()``` method on the Linked List Class:
  ```
  lastNodeValue() {
    if (!this.head) return null;
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
  ```

  The ```isEmpty()``` method checks if the storage is empty. Since the storage unit is a Linked List, this method checks if the head of the list is null:
  ```
  isEmpty() {
    return !this._storage.head;
  }
  ```

## Getting Started

Install dependencies, fork/clone, run methods on the Stack Class that in turn run methods on the Linked List Class that is being used as the storage property. 

Testing: With the jest package installed, use the command 'npm run test' to run tests on these Stack Class methods. 