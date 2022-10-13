const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {

  let repT = options.repeatTimes || 1;
  let sep = options.separator || '+';
  let add = options.hasOwnProperty('addition') || options.addition === null ? String(options.addition) : '';
  let addRepT = options.additionRepeatTimes || 1;
  let addSep = options.additionSeparator || '|';

  let defStr = '';

  for (let i = 0; i < repT; i++) {
    defStr += String(str);
    for (let j = 0; j < addRepT; j++) {
      defStr += add;
      if (j+1 < addRepT) {
        defStr += addSep;
      }
    }
    if (i+1 < repT) {
      defStr += sep;
    }
  }

return defStr

}


module.exports = {
  repeater
};
