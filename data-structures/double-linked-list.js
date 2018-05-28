'use strict';

class DoubleLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  add(node) {
    if(this.next) {
      this.next.add(node);
    }else{
      this.next = node;
      node.prev = this;
      return;
    }
  }

  remove(node) {
    if(this.next === node) {
      node.next.prev = this;
      this.next = node.next;
      return;
    }else {
      this.next.remove(node)
    }
  }
}

const root = new DoubleLinkedList(0);
const one = new DoubleLinkedList(1);
const two = new DoubleLinkedList(2);
const three = new DoubleLinkedList(3);
const four = new DoubleLinkedList(4);

root.add(one);
root.add(two);
root.add(three);
root.add(four);

root.remove(three);

console.log(root);
