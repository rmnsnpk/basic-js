const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof (date) === "undefined") return 'Unable to determine the time of year!';
  let season;
  if (Object.keys(date).length > 0 || typeof (date) !== "object") throw "Error";
  let month = date.getMonth();
  if (month === 11 || month < 2) {
    return "winter";
  }
  if (month > 1 && month <= 4) {
    return "spring";
  }
  if (month > 4 && month <= 7) {
    return "summer";
  }
  if (month  > 7  && month <= 10) {
    return "fall";
  }
};
