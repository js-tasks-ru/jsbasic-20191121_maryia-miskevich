/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min: *}}  объект
 */

function getMinMax(str) {

  let inputArr = str.split(/[,\s]/g);

  inputArr = inputArr.map(element => parseFloat(element)).filter(element => !isNaN(element));

  return {
    min: Math.min.apply(null, inputArr),
    max: Math.max.apply(null, inputArr),
  };
}