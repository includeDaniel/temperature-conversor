# Temperature-Conversor

This is a simple JavaScript function that takes in three parameters: initialMeasureUnit, finalMeasureUnit, and number. It converts a temperature value from one unit to another, based on the provided input.

Usage
To use this temperature converter function, you can require it in your JavaScript project like this:
```
    const temperatureConverter = require('./temperatureConverter');

    // Convert 32 degrees Fahrenheit to Celsius
    const celsius = temperatureConverter("F", "C", 32);
    console.log(celsius); // Output: 0
```
Parameters
initialMeasureUnit: This is the initial unit of temperature measurement. It can be "F" for Fahrenheit, "C" for Celsius, or "K" for Kelvin.
finalMeasureUnit: This is the final unit of temperature measurement. It can be "F" for Fahrenheit, "C" for Celsius, or "K" for Kelvin.
number: This is the temperature value to be converted.
Return Value
The function returns the converted temperature value based on the provided input parameters.

Supported Conversions
This function supports the following temperature conversions:

Fahrenheit to Celsius
Celsius to Fahrenheit
Kelvin to Celsius
Celsius to Kelvin
```
    // Convert 68 degrees Fahrenheit to Celsius
    const celsius = temperatureConverter("F", "C", 68);
    console.log(celsius); // Output: 20

    // Convert 20 degrees Celsius to Fahrenheit
    const fahrenheit = temperatureConverter("C", "F", 20);
    console.log(fahrenheit); // Output: 68

    // Convert 293.15 Kelvin to Celsius
    const celsius = temperatureConverter("K", "C", 293.15);
    console.log(celsius); // Output: 20

    // Convert 20 degrees Celsius to Kelvin
    const kelvin = temperatureConverter("C", "K", 20);
    console.log(kelvin); // Output: 293.15
```
