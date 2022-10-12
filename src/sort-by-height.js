const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let storage = [];
  let ind = arr.indexOf(-1);
  while (ind !== -1) {
    storage.push(ind);
    ind = arr.indexOf(-1, ind + 1);
  }
  
  let height = arr.filter(cm => cm !== -1).sort((a,b) => a > b ? 1 : -1);

  for (let i = 0; i < storage.length; i++) {
      let index = storage[i];
      height.splice(index, 0, -1);
  }
  
  return height 
}

module.exports = {
  sortByHeight
};
