// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number. Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function Sum(num) {
    while (num >= 10) {   
        let total = 0;

        while (num > 0) {
            total += num % 10;
            num = Math.floor(num / 10);
        }

        num = total; 
    }
    return num;
}

console.log(Sum(69));  
console.log(Sum(786));  
console.log(Sum(77)); 
