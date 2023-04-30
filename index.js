//F = Fahrenheit
//C = Celcius
//K = Kelvin

// How to call-----  const name = require('Path'); 

module.exports = function temperatureConversor(initialMeasureUnit, finalMeasureUnit, number) {
    switch (initialMeasureUnit, finalMeasureUnit) {
        case "F", "C":
            return (number - 32) * 5 / 9;
        case "C", "F":
            return (number * 9 / 5) + 32;
        case "K", "C":
            return (number - 273.15);
        case "C", "K":
            return (number + 273.15);
    }
}




