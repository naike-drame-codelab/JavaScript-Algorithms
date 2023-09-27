/*
Create a function that converts Celsius to Fahrenheit and vice versa.

Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
Look on Google how to convert F to C and vice-versa

Expected results
convert("35°C") ➞ "95°F"
convert("19°F") ➞ "-7°C"
convert("33") ➞ "Error"

------> Formule: (0 °C × 9/5) + 32 = 32 °F
*/

function convertTemp(temp) {
    let numValue = temp.match(/[0-9]/g).join('');
    let unit = temp.slice(-1);
    let c = Math.round((numValue - 32) * 5/9).toFixed();
    let f = Math.round((numValue * 9/5) + 32).toFixed();

    if (isNaN(numValue) || !['C', 'F'].includes(unit)) {
        return 'Error';
    }

    if (unit === 'C') return `${f}°F`;
    else if(unit === 'F') return `${c}°C`;

}

console.log(convertTemp("35°C"));
console.log(convertTemp("19°F"));
console.log(convertTemp("33"));
