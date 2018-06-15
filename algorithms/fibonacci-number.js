'use strict';

function fibonacciNumber(limit) {
  const fibSequence = [1];

  let current = 1;
  let prev = 0;

  let count = limit - 1;

  while(count) {
    current += prev;
    prev = current - prev;

    fibSequence.push(current);

    count--;
  }

  return fibSequence;
}

console.log(fibonacciNumber(10));
