function calculate(n1, n2, op) {
    let result;
    
    switch (op) {
        case 'add':
            result = n1 + n2;
            break;
        case 'subtract':
            result = n1 - n2;
            break;
        case 'multiply':
            result = n1 * n2;
            break;
        case 'divide':
            
            result = n2 !== 0 ? n1 / n2 : "Error (Div by 0)";
            break;
        default:
            result = "Invalid Operator";
    }
    return result;
}


function handleCalculate() {
    const val1 = parseFloat(document.getElementById('num1').value);
    const val2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    
    const output = calculate(val1, val2, op);
    document.getElementById('result-display').innerText = "Result: " + output;
}