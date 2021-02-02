class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enQueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return "no hay elementos en el Queue";
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length = 0;
    } else {
      let auxiliary = this.first.next;
      this.first = auxiliary;

      this.length--;
    }

    return this;
  }
}

const myQueue = new Queue();
