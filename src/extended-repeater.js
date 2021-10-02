import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let out='';
  if ('repeatTimes' in options)
  {var repT=options['repeatTimes'];}

  if ('separator' in options)
  {var sep=options['separator'];}
  else
    {var sep='+';}

  if ('addition' in options)
  {var add=options['addition'];}

  if ('additionRepeatTimes' in options)
    {var additRT=Number(options['additionRepeatTimes']);}

  if ('additionSeparator' in options)
  {var additSep=options['additionSeparator'];}
  else{
    var additSep='|';
  }

  let additive='';
  for (let i=0;i<additRT;i++){
      if (i===additRT-1)
        {additive+=add;}
      else
      {additive+=add+additSep;}
  }

  for (let k=0;k<repT;k++){
    if (k===repT-1)
      {out+=str+additive;}
    else
      {out+=str+additive+sep;}
  }
  return out;
}