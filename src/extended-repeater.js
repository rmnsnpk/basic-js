
 const CustomError = require("../extensions/custom-error");

 module.exports = function repeater(str, { repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|' }) {
   let adit = [];
   addition = String(addition);
   for(let i = 0; i < additionRepeatTimes ; i++){
     adit.push(addition)
   };
   adit = adit.join(additionSeparator);
   if(additionRepeatTimes == 0){
     adit = addition
   }
   str = str + adit;
   let repeated = [];
   for(let i = 0; i < repeatTimes ; i++){
     repeated.push(str)
   }
   if(repeatTimes == 0){
     repeated = str
     return str
   }
   return repeated.join(separator)
 };
   