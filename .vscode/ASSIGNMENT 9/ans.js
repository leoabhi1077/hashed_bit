
//Q1: let, const, var scope
function scopeTest() {
    var a = 10;  
    let b = 20;    
    const c = 30; 

    if (true) {
        var x = 100;
        let y = 200;
        const z = 300;
    }

    console.log("Q1:");
    console.log("var x =", x);
    
}
scopeTest();

//Q2: Fruits array & return second fruit 
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(arr) {
    return arr[1];
}
console.log("\nQ2:", getSecondFruit(fruits));

//Q3: push then pop
function modifyArray(arr) {
    arr.push("New Item");
    arr.pop();
    return arr;
}
let items = [1, 2, 3];
console.log("\nQ3:", modifyArray(items));

//Q4: Square numbers using map
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log("\nQ4:", squareNumbers(numbers));

//Q5: Filter odd number
function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log("\nQ5:", getOddNumbers([1,2,3,4,5,6,7]));

//Q6: Person object & greeting
const person = {
    name: "Abhi",
    age: 21,
    occupation: "Student"
};

function greetPerson(obj) {
    console.log("\nQ6:");
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and I am a ${obj.occupation}.`);
}
greetPerson(person);

//Q7: Area of rectangle
function calculateArea(rect) {
    return rect.width * rect.height;
}
const rectangle = { width: 5, height: 10 };
console.log("\nQ7:", calculateArea(rectangle));

//Q8: Get object keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}
const sampleObj = { a: 1, b: 2, c: 3 };
console.log("\nQ8:", getObjectKeys(sampleObj));

//Q9: Merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const obj1 = { name: "Abhi" };
const obj2 = { age: 21 };
console.log("\nQ9:", mergeObjects(obj1, obj2));

//Q10: Sum using reduce
const nums = [1, 2, 3, 4, 5];

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("\nQ10:", sumArray(nums));
