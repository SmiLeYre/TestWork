// In this function we show the result of the expression when hovering over a table cell with the mouse.
function showResult(cell) {
    try {
        let expression = cell.textContent;
        const matches = expression.match(/[A-Za-z0-9]+/g); 
        if (matches) {
            matches.forEach(match => {
                const referencedCell = document.getElementById(match);
                if (referencedCell) {
                    expression = expression.replace(match, referencedCell.textContent);
                }
            });
        }
        const result = eval(expression);
        cell.textContent = result;
    } catch (error) {
        console.log(error);
    }
}

// In this function we get the value of data-expression in the form of an expression or its absence; 
// This is what we see if we do not hover the mouse cursor over a table cell.
function showExpression(cell) {
    cell.textContent = cell.getAttribute('data-expression');
}

// In this function we set the data-expression attribute when a cell is edited.
document.querySelectorAll('.tg-js-script').forEach(cell => {
    cell.addEventListener('input', event => {
        cell.setAttribute('data-expression', event.target.textContent);
    });
});