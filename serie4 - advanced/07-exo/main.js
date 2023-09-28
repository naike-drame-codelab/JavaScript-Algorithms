/*
Fibonacci sequence starts with 1 and 1 and the next numbers are always the sum of the last two numbers. So... Here is the sequence :

1 1 2 3 5 8 13 21 34 ...

Write a function that takes a num number and returns an array with the num first elements of the Fibonacci sequence.

Notes
Recursion would be the best way to solve it but there is another simple way.
Expected results
fibonacci(4) ----> [1, 1, 2, 3]
fibonacci(9) ----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
fibonacci(6) ----> [1, 1, 2, 3, 5, 8]
*/

const fibonacci = (num) => {
    if (num <= 0) {
        return [];
    }

    const sequence = [1, 1];

    for (let i = 2; i < num; i++) {
        const nextValue = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextValue);
    }

    return sequence;
};

console.log(fibonacci(10));
console.log(fibonacci(20));

