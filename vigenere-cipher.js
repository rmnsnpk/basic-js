const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mod) { // Modifications constructor
    this.mod = mod;
  }

  encrypt(message, key) {

    if (!message || !key) throw Error; // Add message and key inspection

    let encryptedString = ''; //Create an empty string for answer

    message = message.toUpperCase(); // Convert message and key to UpperCase string
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i += 1, j += 1) {
      if (isUppercase(message[i])) { // is UPPERCASE letter
        let res = (message[i].charCodeAt() - 65 + key[j % key.length].charCodeAt() - 65) % 26;
        encryptedString += String.fromCharCode(res + 65);
      }
      else { //Add symbol
        encryptedString += message[i];
        j -= 1;
      }
    }
    if (this.mod === undefined) {  // Straight or reverse machine inspection
      return encryptedString;
    } else {
      return encryptedString.split('').reverse().join('');
    }

    // Tests whether the given letter is an Latin uppercase letter.
    function isUppercase(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
    }
  }
  decrypt(encryptMessage, key) {

    if (!encryptMessage || !key) throw Error; // Add message and key inspection

    let decryptString = ''; //Create an empty string for answer

    encryptMessage = encryptMessage.toUpperCase(); // Convert message and key to UpperCase string
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < encryptMessage.length; i += 1, j += 1) {

      if (isUppercase(encryptMessage[i])) { // is UPPERCASE letter
        let res = ((encryptMessage[i].charCodeAt() - 65) - (key[j % key.length].charCodeAt() - 65) % 26);
        if (res < 0) {
          res = 26 + res;
        }
        decryptString += String.fromCharCode(res + 65);
      }
      else { //Add symbol
        decryptString += encryptMessage[i];
        j -= 1;
      }
    }
    if (this.mod === undefined) { // Straight or reverse machine inspection
      return decryptString;
    } else {
      return decryptString.split('').reverse().join('');
    }

    // Tests whether the given character code is an Latin uppercase letter.
    function isUppercase(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
    }
  }
}

module.exports = VigenereCipheringMachine;