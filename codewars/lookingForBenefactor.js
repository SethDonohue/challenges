function newAvg(arr, newAvg) {
  let currentSum = 0;
  if(arr.length > 0){
    currentSum = ((arr.reduce((accum, curr) => accum + curr)));
  }
  // calculate current average of known donations, currentDonationAverage
  
  console.log(currentSum);
  
  //find nextDonation where (nextDonation + currentDonationAverage) / 2 = newAvg
  let nextDonation = (newAvg*(arr.length + 1)) - currentSum;
  console.log(nextDonation);
      
  if(nextDonation <= 0){
    throw new Error("");
    }
  return Math.ceil(nextDonation);
  
} 
