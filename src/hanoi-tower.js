const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //Formula turns: 2n − 1, where n is the number of disks.
  //Formula seconds: turnsx3600/turnsSpeed

  let n = disksNumber;
  let turns = Math.pow(2, n) - 1;
  let seconds = Math.floor(turns * 3600 / turnsSpeed);

  return {
    turns,
    seconds
  }
}

module.exports = {
  calculateHanoi
};
