/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data
      .filter(item => item.age <= age)
      .map(element => `${element.name}, ${element.balance}`)
      .join('\n');
}



