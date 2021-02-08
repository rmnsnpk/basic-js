const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(Array.isArray(matrix)== false || Array.isArray(matrix[0])== false){
    return 0;
  }
  let catCounter = 0;
  for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix[i].length; j++){
      if(matrix[i][j] === '^^'){
        catCounter++;
      } 
    }
  }
  return catCounter;
};
