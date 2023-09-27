/*
In this challenge you will be given an array similar to the following:
[[3], 4, [2], [5], 1, 6]

In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:
[1, [2], [3], 4, [5], 6]

Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

Notes
To reiterate, elements of the array will be either integers or arrays with a single integer.

Expected results
sortIt([4, 1, 3]) ➞ [1, 3, 4]
sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
sortIt([4, [1], 3]) ➞ [[1], 3, 4]
sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
*/

function sortIt(arr) {
    arr.sort(function (a, b) {
        // Check if the elements are arrays or numbers
        if (Array.isArray(a) && Array.isArray(b)) {
            // Compare the single integer inside the arrays
            return a[0] - b[0];
        } else if (Array.isArray(a)) {
            // Place arrays before numbers
            return -1;
        } else if (Array.isArray(b)) {
            // Place numbers after arrays
            return 1;
        } else {
            // Compare the numbers directly
            return a - b;
        }
    });

    return arr;
}

console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]))
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));