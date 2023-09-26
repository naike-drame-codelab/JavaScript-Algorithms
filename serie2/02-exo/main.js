/*
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Expected results
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
num_of_digits(0) ➞ 1
*/

function numDigits(int){
    let count = 0;
    if (int === 0) return ++count;
    
    while (int !== 0) 
    {        
        int = Math.floor(int / 10);
        count++;
    }
    return count;
}

console.log(numDigits(1000));
console.log(numDigits(12));
console.log(numDigits(1305981031));
console.log(numDigits(130598103154654564649846523127));
console.log(numDigits(0));