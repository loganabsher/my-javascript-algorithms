'use strict';

function factorial(int) {
  let res = 1;

  for(let i = 2; i <= int; i++) {
    res *= i;
  }

  return res;
}
