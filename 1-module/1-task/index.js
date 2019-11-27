/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
'use strict';

function pow(m, n) {
  let exp = m;

  for (let i = 1; i < n; i++) {
    exp *= m;
  }
  return exp;
}

let m = prompt('Please, enter a base?', '0');
let n = prompt('Please, enter an exponent?', '0');

let parsed = parseInt(n, 10);

if (parsed >= 1) {
  alert(pow(m, n));
} else {
  alert('Invalid input');
}
