/**
 * Эту функцию трогать не нужно
 */
'use strict';

function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  return ((name !== null) && (name !== undefined) && (name.length >= 4) && (name.indexOf(' ') === -1));
}


function sayHello() {
  const userName = prompt('Введите ваше имя', '');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();

