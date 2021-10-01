import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
	let mass1=s1.split('');
	let mass2=s2.split('');
	let count1={};
	let count2={};
	for (let i=0;i<mass1.length;i++){
		let m=mass1[i];
		if (!(m in count1))
			count1[m]=0;
		count1[m]++;
	}
	for (let i=0;i<mass2.length;i++){
		let m=mass2[i];
		if (!(m in count2))
			count2[m]=0;
		count2[m]++;
	}
	//console.log(count1,count2);
	let keys1=Object.keys(count1).sort();
	let keys2=Object.keys(count2).sort();
	//console.log(keys1,keys2);
	let out=0;
	for (let k=0;k<keys1.length;k++){
		if (keys1[k] in count2)
			out+=Math.min(count1[keys1[k]],count2[keys1[k]]);
		else 
			continue;
	}
	return out;

 	
}

