const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) == false || members == undefined){
    return 0;
  }
  return members.map(name => {
    if (typeof name === 'string') {
      return name.trim()[0].toLocaleUpperCase()
    }
  }).sort().join('')
};
