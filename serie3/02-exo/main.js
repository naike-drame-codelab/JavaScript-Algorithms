/*
Given a string, reverse all the words which have odd length. The even length words are not changed.

Notes
There is exactly one space between each word and no punctuation is used.

Expected results
reverseOdd("Bananas") ➞ "sananaB"
reverseOdd("One two three four") ➞ "enO owt eerht four"
reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
*/

function reverseOdd(str) {
    let arr = str.split(' ');
    //console.log(arr);
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].length % 2) == 1)  // if it's an odd number
        {
            newArr.push((arr[i]).split('').reverse().join(''));
        } else {
            newArr.push(`${arr[i]}`);
        }
    }
    return newArr.join(' ');
}

console.log(reverseOdd(`Bananas`));
console.log(reverseOdd(`One two three four`));
console.log(reverseOdd(`Make sure uoy only esrever sdrow of ddo length`));