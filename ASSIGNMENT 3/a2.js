//Q2) let str = 'I love my India'...output expected = 'India my love I'

let sen = "I love my India";
let arr = sen.split(' ');
let reverse = arr.reverse();
console.log(reverse.join(' '));