import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let str=n+'';
  let mass=[];
  for (let i=0;i<str.length;i++){
    if (i===0)
    {mass.push(str.substr(1));
      
      continue;}
    if (str.length-i===1)
    {mass.push(str.substr(0,i));
      
      continue;}
    mass.push(str.substr(0,i)+str.substr(i+1));
    }
    function max(r,v,i,a){
      return Math.max(Number(r),Number(v));
    }
  
  return mass.reduce(max);
}

