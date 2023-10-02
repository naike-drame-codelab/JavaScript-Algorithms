/*
Create a function that capitalizes a string.

ex:
capitalize("belgium");
// Result : "Belgium"
capitalize("brazil");
// Result : "Brazil"
capitalize("brussels");
// Result : "Brussels"
*/

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize('belgium')); // Belgium
console.log(capitalize("brazil"));
console.log(capitalize("brussels"));