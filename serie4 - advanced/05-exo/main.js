/*
Create a function that takes an array and reverses it.

Notes
Don't use reverse()
Don't create a new array and push elements to it.
*/

function reverse(arr) {
    let start = 0;
    let end = arr.length -1;
    let middleArr = Math.floor(arr.length / 2);

    for(let i = start; i < middleArr; i++)
    {
        [arr[i], arr[end - i]] = [arr[end - i], arr[i]];

    }
    return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([12, 24, 36, 48, 55, 62, 73, 81, 99]));