// Gets the numerical value of an HTML element given its ID
function getNumberValue(id) {
    const value = document.getElementById(id).value;
    return parseFloat(value);
}

// Calculates the average of a list of numbers
function calculateAverage(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

// Display a message in an HTML element given its ID
function displayResult(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
}

// Calculates the average of the grades and displays the result
function calculateAverageAndDisplay() {
    // Gets grades as numbers
    const nota1 = getNumberValue('nota1');
    const nota2 = getNumberValue('nota2');
    const nota3 = getNumberValue('nota3');

    // Calculates the average of the grades
    const average = calculateAverage([nota1, nota2, nota3]);

    // Creates the result message
    const resultMessage = `The average is: ${average.toFixed(2)}`;

    // Displays the result in the HTML element with the ID 'Result'.
    displayResult('Result', resultMessage);
}
