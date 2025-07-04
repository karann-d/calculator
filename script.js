let input = document.getElementById('input');
console.log(input);

function appendValue(value) {
    input.value += value;
}

function clearOne() {
    input.value = input.value.slice(0, -1);
}

function clearResult() {
    input.value = '';
}

function calculateResult() {
    try {
        input.value = eval(input.value);
    }
    catch (error) {
        input.value = error
    }
}


document.addEventListener('keydown', (e) => {
    const key = e.key;

    // allow 0-9 and dot

    // Check if key is a digit or dot
    if (!isNaN(key) || key === '.') {
        appendValue(key);
    }

    // alow operators
    if (['+', '-', '*', '/', '%'].includes(key)) {
        appendValue(key)
    }
    // enter or = to calculate Result
    if (key === 'Enter' || key === "=") {
        calculateResult()
    }
    // Backspace to delete one 
    if (key === 'Backspace') {
        clearOne();
    }
    // Escape to clear All
    if (key === 'Escape') {
        clearResult();
    }
})