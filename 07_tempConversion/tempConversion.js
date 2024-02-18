const convertToCelsius = function(tempFahrenheit) {
  const subtractor = 32;
  const multiplier = 5 / 9;
  let result = ((tempFahrenheit - subtractor) * multiplier);
  let decimalPlaces = Math.pow(10,1);
  return Math.round(result * decimalPlaces)/decimalPlaces ;
};

const convertToFahrenheit = function(tempCelsius) {
  const multiplier = 9 / 5;
  const additive = 32;
  let result = ((tempCelsius * multiplier) + additive)
  let decimalPlaces = Math.pow(10,1);
  return Math.round(result * decimalPlaces)/decimalPlaces ;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
