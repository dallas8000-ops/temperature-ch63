// Function to run the conversion script
function convertCToF() {
  // 1. Get temperature from a prompt and save it in a variable called 'temperature'
  // We prompt the user for the Celsius value.
  let input = prompt("Enter a temperature value in Celsius (°C):");
  
  // Use parseFloat to ensure the input is treated as a number
  let temperature = parseFloat(input);

  // Input validation
  if (isNaN(temperature)) {
    console.error("Invalid input. Please enter a numerical value.");
    document.getElementById("result").innerHTML = 
      "⚠️ **Error:** Invalid input. Please reload and enter a number.";
    return;
  }
  
  // 2. Convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32
  let fahrenheit = (temperature * 9/5) + 32;

  // Format the output
  const outputText = `${temperature.toFixed(2)}°C is equal to ${fahrenheit.toFixed(2)}°F`;

  // 3. Display the converted temperature in the console
  console.log("--- Conversion Result ---");
  console.log(outputText);
  console.log("-------------------------");
  
  // 3. Display the converted temperature in the HTML
  document.getElementById("result").innerHTML = 
    `**${outputText}**`;
}

// Automatically run the function when the script loads
convertCToF();