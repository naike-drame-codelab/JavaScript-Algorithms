/*
Find the days between 2 given days

ex :
dayDif(new Date("2020-10-21"), new Date("2021-10-22"));
// Result : 366
*/

const dayDiff = (d1, d2) => Math.round((Math.abs(d2.getTime() - d1.getTime())) / (1000*60*60*24));

console.log(dayDiff(new Date("2020-10-21"), new Date("2021-10-22")));
console.log(dayDiff(new Date("1990-09-20"), new Date("2023-10-01")));