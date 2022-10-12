const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let newArr = [...arr];

  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';

  for (let i = 0; i < arr.length; i++) {
      
    if (newArr[i] === doubleNext) {
    typeof(newArr[i+1]) === 'number' ? newArr[i] = newArr[i+1] : newArr[i] = newArr[i]
  } else if (newArr[i] === doublePrev) {
    typeof(newArr[i-1]) === 'number' ? newArr[i] = newArr[i-1] : newArr[i] = newArr[i];
  } else if (newArr[i] === discardNext) {
    if (typeof(newArr[i+1]) === 'number') {
    newArr = newArr.filter (elem => elem !== newArr[i+1]);
    newArr = newArr.filter (elem => elem !== newArr[i]);
    }
  } else if (newArr[i] === discardPrev) {
    if (typeof(newArr[i-1]) === 'number') {
    newArr = newArr.filter (elem => elem !== newArr[i]);
    newArr = newArr.filter (elem => elem !== newArr[i-1]);
    }
  }
  }
    return newArr;
  }

module.exports = {
  transform
};