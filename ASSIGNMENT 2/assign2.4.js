//function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
let sum =0;
let n1 =12;
let n2 =6;
while(n1 > 0 && n2> 0){
    let d1 = n1 %10;
    let d2 = n2 %10;
    sum += d1*d2;
    n1 = Math.floor(n1/10); 
    n2 = Math.floor(n2/10);
}
console.log(sum);