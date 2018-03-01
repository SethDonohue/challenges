function divisors(integer) {
  let results =[];
  
  for(i = integer-1; i > 1; i--) {
      if(integer % i === 0){
      results.push(integer/i);
    }
  }
  if(results.length === 0) return `${integer} is prime`; return results;
};
