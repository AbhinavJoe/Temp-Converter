function convertTemperature(inputValue, inputUnit) {
    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'celsius':
            celsius = inputValue;
            fahrenheit = (celsius * 9 / 5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'fahrenheit':
            fahrenheit = inputValue;
            celsius = (fahrenheit - 32) * 5 / 9;
            kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
            break;
        case 'kelvin':
            kelvin = inputValue;
            celsius = kelvin - 273.15;
            fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
            break;
    }
    return { celsius, fahrenheit, kelvin };
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();  // Prevents default form submission. This way we can take input and give output in the same HTML page without having to worry about a server.

    const tempInput = document.getElementById('temp_input').value;
    const unit = document.getElementById('unit').value;
    const outputElement = document.getElementById('output');

    if (unit === 'none' || tempInput === '') {
        outputElement.textContent = 'Please enter a valid temperature and select a unit.';
        return;
    }

    const inputValue = parseFloat(tempInput);
    if (isNaN(inputValue)) {
        outputElement.textContent = 'Please enter a valid numeric temperature.';
        return;
    }

    const convertedTemps = convertTemperature(inputValue, unit);

    // Update the output element
    let outputText = '';
    switch (unit) {
        case 'celsius':
            outputText = `Fahrenheit: ${convertedTemps.fahrenheit.toFixed(2)}, Kelvin: ${convertedTemps.kelvin.toFixed(2)}`;
            break;
        case 'fahrenheit':
            outputText = `Celsius: ${convertedTemps.celsius.toFixed(2)}, Kelvin: ${convertedTemps.kelvin.toFixed(2)}`;
            break;
        case 'kelvin':
            outputText = `Celsius: ${convertedTemps.celsius.toFixed(2)}, Fahrenheit: ${convertedTemps.fahrenheit.toFixed(2)}`;
            break;
    }

    outputElement.textContent = outputText;
}

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', handleFormSubmit);