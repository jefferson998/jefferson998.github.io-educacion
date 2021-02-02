class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    switch (this.length) {
      case 0:
        return undefined;
      case 1:
        this.top = null;
        this.bottom = null;
        break;
      default:
        this.top = this.top.next;
        break;
    }
    this.length--;
    return this;
  }
}

let myStack = new Stack();
