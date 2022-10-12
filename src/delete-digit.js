const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = n.toString().split('');
  let arr = Array.from(str);
  let result = 0;

  Number(arr.slice(0, -1).join("")) > Number(arr.slice(1).join("")) ? result = Number(arr.slice(0, -1).join("")) : result = Number(arr.slice(1).join(""));
  
  for (let i = 1; i<arr.length; i++) {
      if (Number(arr[i]) < Number(arr[i-1])) {
      arr.splice(i,1);
      result > Number(arr.join("")) ? result : result = Number(arr.join(""));
      }
  }
  
  return result;
}

module.exports = {
  deleteDigit
};
