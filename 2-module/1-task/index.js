/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
'use strict';

const obj = {
  test: 1
};


function clone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let clonedObj = {};

  for (let key in obj) {
    clonedObj[key] = clone(obj[key]);
  }
  return clonedObj;
}

clone(obj);