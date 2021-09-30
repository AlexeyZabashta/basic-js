import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let out=[];
  if (!Array.isArray(arr))
    throw"'arr' parameter must be an instance of the Array!";
  else{
    
    for (let i=0;i<arr.length;i++){
      if ((arr[i]==='--discard-next')&&(arr[i+2]==='--double-prev')){
        out.push(arr[i+3]);
        i+=3;
        continue;
      }
      if ((arr[i]==='--double-next')&&(arr[i+2]==='--double-prev')){
        out.push(arr[i+1]);
        out.push(arr[i+1]);
        out.push(arr[i+1]);
        i+=3;
        continue;
      }
      if ((arr[i]==='--discard-next')&&(arr[i+2]==='--discard-prev')){
        out.push(arr[i+3]);
        i+=3;
        continue;
      }
      if ((arr[i]==='--double-next')&&(arr[i+2]==='--discard-prev')){
        out.push(arr[i+1]);
        i+=2;
        continue;
      }

      if (arr[i]==='--discard-next')
        {i++;
          continue;}
      if (arr[i]==='--discard-prev')
        {out.pop();
          continue;}
      if (arr[i]==='--double-next'){
        out.push(arr[i+1]);
        out.push(arr[i+1]);
        i++;
        continue;
      }
      if (arr[i]==='--double-prev'){
        out.push(arr[i-1]);
        out.push(arr[i-1]);
        continue;
      }
      if ((isNaN(Number(arr[i]))===true)||(arr[i]===''))
       {continue;}
      else
      {out.push(arr[i]);}
    }

  }
  return out;
}





