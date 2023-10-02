/*
Create a function that takes a string and a letter and counts how many times the letter appears in the string

ex :

occurencies("hello", "l");
// Result : 2
occurencies("abracadabra", "a");
// Result : 5
occurencies("oups", "z");
// Result : 0
*/

const occurencies = (str, substr) => str.toLowerCase().split(substr.toLowerCase()).length - 1;

console.log(`Result: ${occurencies('hello', 'L')}`);
console.log(`Result: ${occurencies('abracadabra', 'a')}`);
console.log(`Result: ${occurencies('oups', 'z')}`);

const occurencies2 = (str, char) => (str.toLowerCase().match(new RegExp(char.toLowerCase(), 'g')) || []).length;

console.log(`Result: ${occurencies2('Hello', 'L')}`);
console.log(`Result: ${occurencies2('abrAcadaBra', 'A')}`);
console.log(`Result: ${occurencies2('oUps', 'w')}`);
