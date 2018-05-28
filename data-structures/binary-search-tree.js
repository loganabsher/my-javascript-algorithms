'use strict';

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if(node.value < this.value) {
      if(this.left) {
        this.left.add(node);
      }else {
        this.left = node;
      }
    }else if(node.value > this.value) {
      if(this.right) {
        this.right.add(node);
      }else {
        this.right = node;
      }
    }
  }
}

const root = new BinarySearchTree(20);
const left = new BinarySearchTree(10);
const leftleft = new BinarySearchTree(5);
const leftright = new BinarySearchTree(15);
const right = new BinarySearchTree(30);
const rightleft = new BinarySearchTree(25);
const rightright = new BinarySearchTree(35);

root.add(left);
root.add(right);
root.add(leftleft);
root.add(leftright);
root.add(rightleft);
root.add(rightright);

console.log(root);
