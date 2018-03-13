function solve(str) {

  // build map for letter values
  const map = {};
  const alphabet = 'abcdefghijklmnopqrstuvwyxz';
  for( let i = 0; i < 26; i++) {
     map[alphabet[i]] = i+1;
  }
  
  // take str and split into array via vowels, regex
  let subStrArr = str.split(/[aeiou]/);
  console.log(subStrArr);
  // go through array, add values up for each element (now a substr)
  let max = 0;
  subStrArr.forEach( element => {
    let temp = 0;
    for( let char of element) {
      if(map[char]){
        temp += map[char];
      }      
    }
    if(temp > max) max = temp;
    console.log(max);
  })
  
    // if substr value i shigher than max set it to max
    
  return max;
};