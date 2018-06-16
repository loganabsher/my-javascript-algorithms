'use strict';

function primality(int) {
  if(int <= 1) {
    return false;
  }else if(int <= 3) {
    return true;
  }

  if(int % 2 === 0) {
    return false;
  }

  const limit = Math.sqrt(int);
  for(let i = 3; i <= limit; i =+ 2) {
    if(int % i === 0) {
      return false
    }
  }

  return true;
}
