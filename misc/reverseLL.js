// reverse a linked list in place


const LinkedList = require('./linked-list');
const Node = require('./node');

const reverse = (LL) => {
  const current = LL.head;
  console.log(LL);

  while (current.next) {
    const temp = current.next;
    current.next = temp.next;
    temp.next = this.head;
    this.head = temp;
  }
  return LL;
};

export default reverse;
