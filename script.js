function convertToFahrenheit() {
    // Get the input value
    let fahrenheit = document.getElementById("fahrenheit").value;

    // Check if the input is a number
    if (!isNaN(fahrenheit)) {
        // Convert Fahrenheit to Celsius
        let celsius = (fahrenheit - 32) * (5 / 9);

        // Display the result
        document.getElementById("result").innerText = "Result: " + celsius.toFixed(2) + " °C";
    } else {
        // Display an error message if the input is not a number
        document.getElementById("result").innerText = "Please enter a valid number";
    }
}
