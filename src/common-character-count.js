const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let common = [];
  
  for (let i = 0; i < arr1.length; i++) {
      let letter = arr1[i];
      let index2 = arr2.indexOf(letter);
      if (index2 != -1) {
          common.push(letter);
          arr2.splice(index2, 1);
      }
  }
  
  return common.length;
}



module.exports = {
  getCommonCharacterCount
};
