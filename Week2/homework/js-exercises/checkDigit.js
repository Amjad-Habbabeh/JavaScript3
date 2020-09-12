// Exercise 2: Is it bigger than 10?

// Write a function called checkDoubleDigits that:

// Takes 1 argument: a number
// Returns a new Promise
// If the number is bigger than 10, resolve with the string: "The number is bigger than 10!"
// If the number is smaller than 10, reject with the error: "Error! The number is smaller than 10..."

const checkDoubleDigits = x => {
  return new Promise(function(resolve, reject) {
    if (x > 10) {
      resolve('The number is bigger than 10!');
    } else {
      reject(new Error('Error! The number is smaller than 10...'));
    }
  });
};
checkDoubleDigits(22);
