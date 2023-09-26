/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Notes
All test arrays will have at least one element and are valid.

Expected results
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
*/

function minMax(array) {
    let min = array[0];
    let max = array.length -1;
    for(i=0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        } else if (array[i] > array.length -1){
            max = array[i];
        }
    }

    return [min, max];

}

console.log(minMax([1, 2, 3, 4, 5])); 
console.log(minMax([2334454, 5])); 
console.log(minMax([1])); 
