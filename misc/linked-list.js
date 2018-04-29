const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
  
    currentNode.next = new Node(value);
    return this;
  }
};
