/*
Create a function that takes a string parameter and return another string with all the words inversed.
Notes
Attention !

The order of the words doesn't change, just the letters of each word
Expected results
"This is a string of words" ----> "siht si a gnirts fo sdrow"
*/

function reversedWord(str) {
    let words = str.split(' ');
    //console.log(words);
    let reversedLetters = words.map(word => word.split("").reverse().join(""));
    //console.log(reversedLetters);
    let reversedString = reversedLetters.join(" ");
    return reversedString;
        
}
    //let reversedWord = (str) => str.split('').reverse().join('')//.split(" ").reverse().join(" ");



    console.log(reversedWord("This is a string of words"));