'use strict';

class Tries {
  constructor(char) {
    this.char = char;
    this.entries = 0;
    this.children = {};
  }

  add(string) {
    let node = this;
    for(let i = 0; i < string.length; i++) {
      if(string[i + 1] === undefined) {
        this.entries++;
        return;
      }
      if(node[string[i]] !== string[i]) {
        node[string[i]] = new Tries(string[i]);
      }
      node = node[string[i]];
    }
  }
}

const root = new Tries('');

root.add('ad');
root.add('ad');
root.add('ad');
root.add('ad');
root.add('ad');
root.add('add');
root.add('add');
root.add('add');
root.add('add');
root.add('adore');
root.add('adore');
root.add('adore');
root.add('adore');
root.add('root');
root.add('roof');
