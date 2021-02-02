class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    newNode.next.prev = newNode;
    this.head = newNode;
    this.length++;
    return console.log(this.head);
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let target = this.head;
      let slice = undefined;
      for (let i = 1; i < index; i++) {
        target = target.next;
      }
      slice = target.next;
      slice.prev = newNode;
      newNode.next = target.next;
      newNode.prev = target;
      target.next = newNode;
      this.length++;
      return console.log(this.head);
    }
  }

  remove(index) {
    if (index >= this.length) {
      return console.log("Índice no Válido");
    } else {
      let target = this.head;
      let slice = undefined;
      for (let i = 1; i < index; i++) {
        target = target.next;
      }
      slice = target.next.next;
      slice.prev = target;
      target.next = slice;
      this.length--;
      return console.log(this.head);
    }
  }
}

let myDoublyLinkedList = MyDoublyLinkedList(1);
