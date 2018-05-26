'use strict';

class SingleLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(node) {
    if(this.next) {
      this.next.add(node)
    }else {
      this.next = node;
      return;
    }
  }

  remove(node) {
    if(this.next === node) {
      this.next = node.next;
      return;
    }else {
      this.next.remove(node);
    }
  }
}

const root = new SingleLinkedList(0);
const one = new SingleLinkedList(1);
const two = new SingleLinkedList(2);
const three = new SingleLinkedList(3);
const four = new SingleLinkedList(4);

root.add(one);
root.add(two);
root.add(three);
root.add(four);

root.remove(three);

console.log(root);
