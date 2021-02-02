// const array=['Daniel','Jefferson','Andrea']
//metodos

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //metodos
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this - length--;
    return lastItem;
  }
  deleteMetodo(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  add(index, element) {
    for (let i = this.length; i > 0; i -= 1) {
      this.data[i] = this.data[i - 1];
    }
    this.length += 1;
    this.data[0] = element;
    return this.data;
  }
  unshift(element) {
    return this.add(0, element);
  }
  shift() {
    return this.deleteMetodo(0);
  }
}

const myArray = new MyArray();
