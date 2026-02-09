//Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "Hey HashedBit great to work with you";

str = str.toLowerCase();

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {   
        if ("aeiou".includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Original String:", str);
console.log("Total Vowels:", vowels);
console.log("Total Consonants:", consonants);
