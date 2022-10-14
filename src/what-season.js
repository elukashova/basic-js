const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!date instanceof Date || Object.getOwnPropertyNames(date).length > 0 || typeof date !== 'object') {
    throw new Error('Invalid date!');
  }

  let strDate = date.toString();
  let season = '';

  if (strDate.match(/Dec|Jan|Feb/)) {
    season = 'winter';
  } else if (strDate.match(/Mar|Apr|May/)) {
    season = 'spring';
  } else if (strDate.match(/Jun|Jul|Aug/)) {
    season = 'summer';
  } else if (strDate.match(/Sep|Oct|Nov/)) {
    season = 'fall';
  }
  
  return season

}


module.exports = {
  getSeason
};
