const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  let cat = '^^';
  let maybeCat;
  let num = 0;
    
  for (let i = 0; i<matrix.length; i++) {
      let maybeCat = matrix[i];
      
    for (let j =0; j<maybeCat.length; j++) {
      if (maybeCat[j] === cat) {
        num++;
    }
  }
}
    return num;
}

module.exports = {
  countCats
};
