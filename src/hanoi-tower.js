const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let objHonoi = {
        turns: 0,
        seconds: 0
    }

    objHonoi.turns = (2 ** disksNumber) - 1;
    objHonoi.seconds = Math.floor( ((1)/(turnsSpeed/3600) ) * objHonoi.turns);

    return objHonoi;
};
