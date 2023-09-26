/*
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
Notes
Don't forget to return the result.

Expected results
makesTen(9, 10) ➞ true
makesTen(9, 9) ➞ false
makesTen(1, 9) ➞ true
*/

function makesTen(num1, num2) {
    if(num1 === 10 || num2 ===10 || num1 + num2 === 10) {
        return true;
    } else { return false; }
}

console.log(makesTen(5, 4));
console.log(makesTen(0, 10));
console.log(makesTen(6, 4));
console.log(makesTen(7, 2));
console.log(makesTen(10, 0));
