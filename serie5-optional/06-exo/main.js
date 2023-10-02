/*
Create a function that generates a random rgb value. The outcome should be the same as we declare it in CSS : rgb(?, ?, ?)

ex :
randomRGB();
// Result : "rgb(232, 115, 164)"
*/

const randomRGB = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

console.log(randomRGB());