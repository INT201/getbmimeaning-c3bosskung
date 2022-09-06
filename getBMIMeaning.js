const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight / Math.pow(height, 2);
}
function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height);
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal weight';
  } else if (bmi > 25) {
    return 'Overweight';
  }
}
module.exports = getBMIMeaning
