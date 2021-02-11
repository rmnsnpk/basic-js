const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(obj) {
      if (Array.isArray(obj)) return 1 + Math.max(...obj.map(t => getArrayDepth(t)))
      else return 0;
  }
  }