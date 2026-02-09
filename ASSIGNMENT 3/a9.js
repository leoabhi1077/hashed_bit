//Q9) Write a function to count the number of words in a paragraph.

function count(paragraph) {

    let words = paragraph.trim().split(/\s+/);
    return words.length;
}

let text = "Its nice to work with hashedbit";
console.log(count(text));  
