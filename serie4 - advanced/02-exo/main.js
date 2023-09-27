/*
A palindrome is any word or phrase that spells the same way both backward and forward.
For example : race car is a palindrome. (don't take spaces, periods, dots, etc in consideration)
Other examples : Madam, I'm Adam, radar, kayak, etc.

You should create a function isPalindrome that takes a parameter text and returns a boolean indicating if the provided text is a palindrome or not.
Notes
You should be able to to ignore all special characters, spaces, dots, periods, etc. and be case insensitive

Expected results
isPalindrome("kayak") ---> true
isPalindrome("race car") ---> true
isPalindrome("hello world") ---> false
isPalindrome("Madam, I'm Adam") ---> true
*/

function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome("eye")); 
console.log(isPalindrome("RaceCar"));
console.log(isPalindrome("hello"));
