/*
Caesar Cipher is a way of "encrypting" a text that, supposably, Julius Caesar used in his communication.
We switch every letter with, for example, two letters before in the alphabet.

The Caesar cipher function will take two parameters str and num; str represents the text we want to cipher and num de amount of letters you want to go forward or backward (using negative numbers)

Notes
Make it case incensitive
You should be able to loop back or forward into de the alphabet (if you have to go 3 from z, it would be c)

Expected results
caesarCipher("zoo keeper", 2) ----> "bqq mggrgt"
caesarCipher("bqq mggrgt", -2) ----> "zoo keeper"
caesarCipher("My name is Henrique", 3) ----> "pb qdph lv khqultxh "
*/

// function caesarCipher(msg, cKey) {
//     msg = msg.toUpperCase();
//     return msg.replace(
//         /[\u0041-\u005A\u0061-\u007A\u00C0-\u00FF]/g, 
//         (char) => {
//             let charCode = char.charCodeAt(0) - 65;
//             charCode = (charCode - cKey + 26) % 26;
//             return String.fromCharCode(charCode + 65);
//         }
//     );
// }

// console.log(caesarCipher("zoo keeper", 2)); // "BQQ MGGRGT"
// console.log(caesarCipher("bqq mggrgt", -2)); // "ZOO KEEPER"
// console.log(caesarCipher("My name is Henrique", 3)); // "YKP OQWKWM"
// console.log(caesarCipher('My name is Naïké', 14)); // "QV WKGK ZMJJL"


function caesarCipher(msg, cKey) {
    const regEx = /[\u0041-\u005A\u0061-\u007A\u00C0-\u00FF]/g;
    return msg.replace(regEx, (char) => {
        let charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letter
            charCode = ((charCode - 65 + cKey + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letter
            charCode = ((charCode - 97 + cKey + 26) % 26) + 97;
        } else if (charCode >= 192 && charCode <= 255) {
            // Accented characters
            charCode = ((charCode - 192 + cKey + 26) % 64) + 192;
        }
        return String.fromCharCode(charCode).toLowerCase();
    });
}

console.log(caesarCipher("zoo keeper", 2)); 
console.log(caesarCipher("bqq mggrgt", -2)); 
console.log(caesarCipher("My name is Henrique", 3)); 
console.log(caesarCipher("My name is Naïké Dramé", -3)); 



