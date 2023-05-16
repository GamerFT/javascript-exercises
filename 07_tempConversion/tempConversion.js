const convertToCelsius = function(temp) {
  let t = (temp-32) * (5/9)
  t = Math.round(t*10)/10
  return t
};

const convertToFahrenheit = function(temp) {
  let t = (temp*(9/5))+32
  t = Math.round(t*10)/10
  return t
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
