// function allowMathSymbols(event) {
//     const allowedKeys = /[0-9+АБВГД/]/;
//     const inputChar = String.fromCharCode(event.charCode);
//     if (!allowedKeys.test(inputChar)) {
//         event.preventDefault();
//     }
// }

function showExpression(cell) {
    cell.innerHTML = cell.getAttribute('data-expression');
}

function showResult(cell) {
    const expression = cell.getAttribute('data-expression');
    const result = eval(expression);
    cell.innerHTML = result;
}