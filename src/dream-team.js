import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let mass=[];
  for (let m=0;m<members.length;m++){
    if (typeof members[m] === "string" || members[m] instanceof String)
      mass.push(members[m]);
  }

   
 
  
  let symb=[];
  if (mass.length===0)
  return false;
  else {
  for (let i=0;i<mass.length;i++){
    let part=(mass[i].trim().toUpperCase())[0];
    symb.push(part);
   
  
  }
  console.log(symb);
  return symb.sort().join('');
  }
}