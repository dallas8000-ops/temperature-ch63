// --- 1. Core Conversion Function ---

function convertTemperature(temperature, scale) {
    let convertedTemp;
    // Normalize the scale input to uppercase
    const originalScale = scale.toUpperCase(); 

    // Use an if statement to check the scale parameter.
    if (originalScale === "C") {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temperature * 9 / 5) + 32;
        
        return {
            value: convertedTemp.toFixed(2),
            scale: "F" // Target scale is Fahrenheit
        };
        
    } else if (originalScale === "F") {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temperature - 32) * 5 / 9;
        
        return {
            value: convertedTemp.toFixed(2),
            scale: "C" // Target scale is Celsius
        };
        
    } else {
        // Handle invalid scale input
        return "Invalid scale parameter. Please use 'C' or 'F'.";
    }
}

// --- 2. Extra Challenge Function (Color Change) ---

function applyColorClass(element, temperature, scale) {
    // Clear existing color classes
    element.classList.remove('hot', 'cold', 'mild');
    
    const tempValue = parseFloat(temperature);

    // Set thresholds and apply class using classList.add()
    if (scale === 'F') {
        // Fahrenheit thresholds: Hot >= 85, Cold <= 32
        if (tempValue >= 85) {
            element.classList.add('hot');
        } else if (tempValue <= 32) {
            element.classList.add('cold');
        } else {
            element.classList.add('mild');
        }
    } else if (scale === 'C') {
        // Celsius thresholds: Hot >= 30, Cold <= 0
        if (tempValue >= 30) {
            element.classList.add('hot');
        } else if (tempValue <= 0) {
            element.classList.add('cold');
        } else {
            element.classList.add('mild');
        }
    }
}


// --- 3. HTML Interaction Function ---

function performConversion() {
    // Get inputs
    const tempInput = document.getElementById('tempInput').value;
    const scaleInput = document.getElementById('scaleInput').value;
    const resultDisplay = document.getElementById('resultDisplay');

    const temperature = parseFloat(tempInput);

    // Validate input is a number
    if (isNaN(temperature)) {
        resultDisplay.textContent = "Error: Please enter a valid number for the temperature.";
        resultDisplay.className = ''; 
        return;
    }

    // Call the core conversion function
    const result = convertTemperature(temperature, scaleInput);

    // Display the result
    if (typeof result === 'string') {
        // Handle error message
        resultDisplay.textContent = result;
        resultDisplay.className = ''; 
    } else {
        // Determine the original scale for the message (for clarity in the output)
        const originalScale = result.scale === 'F' ? 'C' : 'F';
        
        // Update the display text on the HTML
        const message = `${tempInput}°${originalScale} is equal to <strong>${result.value}°${result.scale}</strong>`;
        resultDisplay.innerHTML = message;
        
        // Apply the color challenge
        applyColorClass(resultDisplay, result.value, result.scale);
    }
}