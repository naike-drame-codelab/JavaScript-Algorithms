/*
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Notes
Expect any positive number between 1 and 1000.

Expected results
addUp(4) ➞ 10
addUp(13) ➞ 91
addUp(600) ➞ 180300
*/

function addUp(n) {
    const numbers = [];
    let sum = 0
    for (i = 1; i <= n; i++) {
        numbers.push(i);
    }
    for (j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }
    return sum;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
console.log(addUp(3400));