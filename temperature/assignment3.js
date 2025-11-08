/**
 * Function to convert a temperature between Celsius and Fahrenheit.
 * Requirements: Uses 'if' statement to check the scale.
 * * @param {number} temperature - The temperature value to convert.
 * @param {string} scale - The target scale: "C" for Celsius or "F" for Fahrenheit.
 * @returns {object|string} An object with {value, scale} or an error string.
 */
function convertTemperature(temperature, scale) {
    let convertedTemp;
    // Normalize the scale input to uppercase
    const targetScale = scale.toUpperCase();
    let originalScale;

    
    if (targetScale === "F") {
        // Convert Celsius to Fahrenheit: Fahrenheit = (Celsius * 9/5) + 32
        convertedTemp = (temperature * 9 / 5) + 32;
        originalScale = "C";
    } else if (targetScale === "C") {
        // Convert Fahrenheit to Celsius: Celsius = (Fahrenheit - 32) * 5/9
        convertedTemp = (temperature - 32) * 5 / 9;
        originalScale = "F";
    } else {
        // Handle invalid scale input
        return "Invalid scale. Please use 'C' or 'F'.";
    }

    // Return an object containing the rounded converted value and its scale
    return {
        value: convertedTemp.toFixed(2),
        scale: targetScale
    };
}

// --- Extra Challenge Function ---

/**
 * Changes the color of the result text according to the temperature using classList.add().
 * @param {HTMLElement} element - The DOM element to apply the class to.
 * @param {string} temperature - The converted temperature value (as a string).
 * @param {string} scale - The scale of the converted temperature (C or F).
 */
function applyColorClass(element, temperature, scale) {
    // 1. Clear existing color classes
    element.classList.remove('hot', 'cold', 'mild');
    
    // Convert temperature string to a number for comparison
    const tempValue = parseFloat(temperature);

    // 2. Set thresholds and use classList.add()
    if (scale === 'F') {
        if (tempValue >= 85) {
            element.classList.add('hot'); 
        } else if (tempValue <= 32) {
            element.classList.add('cold'); 
        } else {
            element.classList.add('mild');
        }
    } else if (scale === 'C') {
        if (tempValue >= 30) {
            element.classList.add('hot'); 
        } else if (tempValue <= 0) {
            element.classList.add('cold'); 
        } else {
            element.classList.add('mild');
        }
    }
}


/**
 * Orchestrates the full conversion process, reading inputs and updating the DOM.
 */
function performConversion() {
    // 1. Get input values
    const tempInput = document.getElementById('tempInput').value;
    const scaleInput = document.getElementById('scaleInput').value;
    const resultDisplay = document.getElementById('resultDisplay');

    const temperature = parseFloat(tempInput);

    // Basic input validation
    if (isNaN(temperature)) {
        resultDisplay.textContent = "Error: Please enter a valid number for the temperature.";
        resultDisplay.className = ''; 
        return;
    }

    // 2. Call the conversion function
    const result = convertTemperature(temperature, scaleInput);

    // 3. Display the converted temperature on the HTML
    if (typeof result === 'string') {
        // Display error message
        resultDisplay.textContent = result;
        resultDisplay.className = ''; 
    } else {
        
        const originalScale = result.scale === 'F' ? 'C' : 'F';
        
        // Use innerHTML to display the result, making the output bold
        const message = `${tempInput}°${originalScale} is equal to **${result.value}°${result.scale}**`;
        resultDisplay.innerHTML = message;
        
        // 4. Apply the color challenge
        applyColorClass(resultDisplay, result.value, result.scale);
    }
}