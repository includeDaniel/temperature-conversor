//F = Fahrenheit
//C = Celcius
//K = Kelvin

// How to call-----  const name = require('Path');

export function temperatureConversor(
  initialMeasureUnit: string,
  finalMeasureUnit: string,
  number: number,
) {
  if (initialMeasureUnit + finalMeasureUnit === "CF") {
    return (number * 9) / 5 + 32;
  } else if (initialMeasureUnit + finalMeasureUnit === "FC") {
    return ((number - 32) * 5) / 9;
  } else if (initialMeasureUnit + finalMeasureUnit === "CK") {
    return number + 273.15;
  } else if (initialMeasureUnit + finalMeasureUnit === "KC") {
    return number - 273.15;
  } else if (initialMeasureUnit + finalMeasureUnit === "FK") {
    return +(((number - 32) * 5) / 9 + 273.15).toFixed(3);
  } else if (initialMeasureUnit + finalMeasureUnit === "KF") {
    return +(((number - 273.15) * 9) / 5 + 32).toFixed(3);
  }
}
