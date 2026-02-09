// Q5) Write a func to replace wrong word with correct word in any sentence. Like this - correctfn(string, wrong, correct). Use string.replace in funct.

function correctFn(sentence, wrong, correct) {
    let newSentence = sentence.replace(wrong, correct);
    return newSentence;
}

let result1 = correctFn(
  "hey hashedbit its good to work with the company",
  "good","great"
);

console.log(result1);



