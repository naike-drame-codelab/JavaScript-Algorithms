/*
Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

Notes
Broken keys should be ordered by when they first appear in the sentence.
Only one broken key per letter should be listed.
Letters will all be in lower case.

Expected results
findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
*/

function findBrokenKeys(str1, str2) {
    let brokenKeys = [];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            brokenKeys.push(str1[i]);
        }
    }
    return brokenKeys.filter((key, index, arr) => arr.indexOf(key) === index);
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));