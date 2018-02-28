// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Brute Force with a loop:
const findMultiplesAndSum = (limit = 10, multiples = [3, 5]) => {
  const sum = [];
  for (let i = multiples[0]; i < limit; i++) {
    if (i % multiples[0] === 0 && !i % multiples[1] === 0) {
      sum.push(i);
    } else if (i % multiples[1] === 0 && !i % multiples[0] === 0) {
      sum.push(i);
    }
  }

  return sum.reduce((a, b) => a + b);
};

console.log(findMultiplesAndSum(1000, [3, 5]));
