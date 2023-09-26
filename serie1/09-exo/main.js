/*
A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
Create a function which calculates the amount of fuel it needs, given the distance.

Notes
Distance will be a number greater than zero.
Return 100 if the calculated fuel turns out to be less than 100.

Expected results
calculateFuel(15) ➞ 150
calculateFuel(23.5) ➞ 235
calculateFuel(3) ➞ 100
*/

function calculateFuel(d){
    let f = 100;
    if(d > 0 && d * 10 > f) {
        return d * 10
    } else if (d * 10 < 100){
        return f;
    }
}

console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));
console.log(calculateFuel(9));
