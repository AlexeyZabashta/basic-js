import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    
  function rekurs(arr){
  let count=0; 
  for (let i=0;i<arr.length;i++){
  let aI=arr[i];
  if (Array.isArray(aI)){
  count+=rekurs(aI)+1;
  //alert('рекурсия '+' count= '+count);	
  }
    
  else {
  //alert('не рекурсия '+' count= '+count);
   }
  }
  
  return count;
  }
  return rekurs(arr)+1;
    }
}
