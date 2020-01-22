/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {

  let ul = document.createElement('ul');

  for (let item of friends) {
    let li = document.createElement('li');
    li.append(item.firstName + ' ' + item.lastName);
    ul.append(li);
  }

  return ul;
}
