/*
Create a function that takes the age in years and returns the age in days.

Notes
- Use 365 days as the length of a year for this challenge.
- Ignore leap years and days between last birthday and now.
- Expect only positive integer inputs.

Expected results
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
*/

function calcAge(years) {
    //Check if it receives a positive integer input. If not, it sends an error and returns.
    if (years <= 0) {
        console.log('Out of range.');
        return;
    }
    
    //Convert years in days, not including leap years. 
    let days = years * 365;
    
    //Check if it's a leap year. Leap year rules: divisible by 4 but not by 100, or divisible by 400.
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    //Loop through each year of the age and checks if it is a leap year. If it is, it subtracts one day(29th february) from the total.
    for (let year = 0; year < years; year++) {
        if (isLeapYear(year)) {
            days--;
        }
    }

    return days;
}


console.log(calcAge(-10));

console.log(`You are ${calcAge(33)} days old.`);
console.log(`You are ${calcAge(27)} days old.`);
console.log(`You are ${calcAge(64)} days old.`);
console.log(`You are ${calcAge(70)} days old.`);
console.log(`You are ${calcAge(34)} days old.`);

