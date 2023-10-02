/*
Find the average between multiple numbers using reduce method.

ex:
average(1, 2, 3, 4);
// Result: 2.5
*/

const average = (...args) => args.reduce((acc, val) => acc + val, 0) / args.length;

console.log(average(1, 2, 3, 4));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(average(11, 22, 33, 44));
