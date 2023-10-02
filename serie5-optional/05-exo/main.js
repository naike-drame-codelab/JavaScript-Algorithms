/*
Check if Two Arrays Contain the Same Values

ex :
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3];

areEqual(arr1, arr2);
// Result : true

areEqual(arr1, arr3);
// Result : false
*/

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3];

const areEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((element) => arr2.includes(element));

console.log(areEqual(arr1, arr2));
console.log(areEqual(arr1, arr3));