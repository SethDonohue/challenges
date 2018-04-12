// Sum of all multiples of 3 OR 5 less than 1000.

const multiplesSum = (numOne, numTwo, upperLimit) => {

  let sum = 0;
  
  // Simple for loop method to calulate multiples up to the limit, but not including
  const findMultiples = (number) => {
    let sum = 0;
    for (let i = 1; i < upperLimit; i++) {
      if (i % number === 0) sum += i;
    }
    return sum;
  }
  
  // Sum for each number, then subtract for product of two numbers to remove duplicates
  return (findMultiples(numOne) + findMultiples(numTwo)) - findMultiples(numOne*numTwo);
}

console.log(multiplesSum(3,5,1000));
