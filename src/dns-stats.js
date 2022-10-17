const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  for (let i = 0; i < domains.length; i++) {
      let domain = domains[i];
      let revComponents = domain.split(".").reverse();
      let concatComp = "." + revComponents[0];
      if (concatComp in stats) {
          stats[concatComp]++;
      } else {
          stats[concatComp] = 1;
      }
      for (let j = 1; j < revComponents.length; j++) {
          concatComp += "." + revComponents[j];
          if (concatComp in stats) {
              stats[concatComp]++;
          } else {
              stats[concatComp] = 1;
          }
      }
  }
  return stats;
}


module.exports = {
  getDNSStats
};
