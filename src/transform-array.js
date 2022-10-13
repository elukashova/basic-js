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
  let newArr = [];
  
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === doubleNext) {
          if (i < arr.length - 1) {
              newArr.push(arr[i+1]);
          }
      } else if (arr[i] === doublePrev) {
          if (i > 1 && arr[i - 2] === discardNext) {
              continue;
          } else if (i > 0) {
              newArr.push(arr[i-1]);
          }
      } else if (arr[i] === discardNext) {
          if (i < arr.length - 1) {
              i++;
          } else {
              newArr = newArr.filter (elem => elem !== newArr[i]);
          }
      } else if (arr[i] === discardPrev) {
          if (i > 1 && arr[i - 2] === discardNext) {
              continue;
          } else if (i > 0) {
              newArr.pop();
          }
      } else {
          newArr.push(arr[i]);
      }
  }
  return newArr;
}

module.exports = {
  transform
};