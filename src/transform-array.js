const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  
  if(!(arr instanceof Array)) throw('Error');
  let prev=null;
  const re = [];

 for(let a=0,r=0; a < arr.length; a++) {
  switch( arr[a]){
    case '--discard-next': prev = null; if( a < arr.length-1 ) a++; break;
    case '--discard-prev': if( re.length > 0 && prev!== null) re.pop(); break;
    case '--double-next':  if( a < arr.length-1 ) re.push( arr[a+1] ); break;
    case '--double-prev': if( re.length > 0 && prev!== null) re.push( prev ); break;
    default: prev = arr[a]; re.push(prev); break;
  }
 }
  return re;
};