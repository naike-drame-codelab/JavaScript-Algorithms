/*
Write a function that takes as argument an array of numbers numArray and the sum we want to obtain.

Your function should return every pair of numbers from numArray that adds up to the 'sum'

Notes
The result should be an array of arrays.
Any number in the array can be used in multiple pairs (look at the "4" in the exemple below)
Expected results
// For "sum" = 7
[1, 6, 4, 5, 3, 3] ---> [[6,1], [3,4], [3,4]]
*/

function sumArray(numArr, sum) {
    //Empty obj to keep track of the numbers seen in our array
    let seenNums = {};
    //Empty array the pairs of numbers that add up to the sum
    let sumPairs = [];

    //For each element in the numArr array :
    for (let i = 0; i < numArr.length; i++) {
        //Calculates its matching number by subtracting it from the target sum
        let matchingNum = sum - numArr[i];
        //Checks if the matching number is already in the seenNums object
        if (seenNums[matchingNum]) {
            //Adds a new pair of elements to the sumPairs array. The pair is the current element and its matching number
            sumPairs.push([numArr[i], matchingNum]);
        } else {
            //If not then push this new value (at first it's undefined, when we push it becomes true) into the seenNums object with key being equal to the current index + 1
            seenNums[numArr[i]] = true;
            console.log(seenNums)
        }
    }
    return sumPairs;
}

console.log(sumArray([1, 6, 4, 5, 3, 3], 7));

/*
In JavaScript, when you assign a value to a property in an object, you are essentially adding a new property to the object with that name. The value you assign to the property is what will be stored in the object.

In your code, seenNum[numArr[i]] = true; is adding a new property to the seenNum object. The name of the property is numArr[i], and the value is true.

Here's a simpler explanation of how it works:

- seenNum[numArr[i]] - This is a way to access a property in an object. The name of the property is numArr[i]. If numArr[i] is "one", for example, you are accessing the property named "one" in the seenNum object.
- seenNum[numArr[i]] = true; - This is a way to add a new property to an object. The name of the property is numArr[i], and the value is true. So, if numArr[i] is "one", you are adding a new property named "one" to the seenNum object, and the value of that property is true.
In the context of your function, this line is used to keep track of the numbers that have been seen in the array. If a number is seen for the first time, seenNum[numArr[i]] will be undefined, and seenNum[numArr[i]] = true; will add a new property with that number as the name and true as the value. If a number is seen a second time, seenNum[numArr[i]] will be true, and seenNum[numArr[i]] = true; will simply reassign the value of the existing property to true.

This is essentially how the seenNum object is used as a HashMap in your function developer.mozilla.org.
*/

/*
```
function sumArray(numArray, sum) {
    let sumArr = [];
    
    for (let i = 0; i < numArray.length; i++) {
        for (let j = i + 1; j < numArray.length; j++) {
            if ((numArray[j] + numArray[i]) === sum) {
                sumArr.push([numArray[i], numArray[j]]);
            }
        }
    }
    return sumArr;
}
```

Can you explain why the nested loop in the original solution has a time complexity of O(n^2)?
nested loop time complexity explanation O(n^2)
ANSWER | PHIND V4 MODEL

The time complexity of a nested loop is calculated by multiplying the number of iterations of the outer loop by the number of iterations of the inner loop. In the case of your original function, the outer loop iterates over the numArray array, and for each iteration of the outer loop, the inner loop also iterates over the numArray array.

The outer loop runs numArray.length times, and for each iteration of the outer loop, the inner loop runs numArray.length times minus the current index of the outer loop. This can be expressed as (numArray.length * (numArray.length - 1)) / 2.

This calculation is derived from the formula for the sum of the first n natural numbers, which is (n * (n + 1)) / 2. The sum of the first n natural numbers gives us the total number of iterations of the inner loop across all iterations of the outer loop geeksforgeeks.org.

Therefore, the time complexity of the original function is O((numArray.length * (numArray.length - 1)) / 2), which simplifies to O(n^2) in Big O notation, where n is the size of the input array stackoverflow.com.

This is because the time complexity of the original function is proportional to the square of the size of the input array. This means that as the size of the input array increases, the running time of the function increases quadratically freecodecamp.org.
*/