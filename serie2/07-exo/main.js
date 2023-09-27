/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Notes
If the input tries to divide by 0, return: "Can't divide by 0!"

Expected results
calculator(2, "+", 2) ➞ 4
calculator(2, "*", 2) ➞ 4
calculator(4, "/", 2) ➞ 2
*/

function calculator(a, op, b) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (op === '/' && b == '0') {
                console.log("Can't divide by zero!");
            } else {
                return a / b;
            }
        default:
            return null;
    }

}

console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(10, "/", 2));
console.log(calculator(913, "-", 17));
console.log(calculator(2,"/",0));
