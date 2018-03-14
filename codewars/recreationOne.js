function listSquared(m, n) {
  const results = [];
  // for every number from m to n
  for (let i = m; i <= n; i++) {
    let squaredDivisorSum = 0;
    // calc all divisors from 1(use modulo)
    for (let j = 1; j <= i; j++) {
      if ((i % j) === 0) {
        // sum the squared divisors
        squaredDivisorSum += j * j;
      }
    }
    // if sum is a square
    if (Math.sqrt(squaredDivisorSum) % 1 === 0) {
      // create array with number and the sum, push to final array
      results.push([i, squaredDivisorSum]);
    }
  }
  return results;
}
