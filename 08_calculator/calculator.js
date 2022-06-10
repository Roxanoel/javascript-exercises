const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = array => {
	// Introduce variable to keep track of sum
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = array => {

  let product = array[0];

  for (let i = 1; i < array.length; i++) {
    product *= array[i];
  }
  
  return product;
};

const power = (num1, num2) => num1 ** num2;

const factorial = num => {
  let result = num;

  // Returns 1 when value is 0
  if (result === 0) return 1;

  // For other values, runs this loop
  for (let i = num - 1; i > 0; i--){
    result *= i;
  }

  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
