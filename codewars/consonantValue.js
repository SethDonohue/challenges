function solve(str) {
  // build map for letter values
  const map = {};
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 26; i++) {
    map[alphabet[i]] = i + 1;
  }
  
  // take str and split into array via vowels, regex
  const subStrArr = str.split(/[aeiou]/);
  console.log(subStrArr);
  // go through array, add values up for each element (now a substr)
  let max = 0;
  subStrArr.forEach(element => {
    let temp = 0;
    for (const char of element) {
      if (map[char]) {
        temp += map[char];
      }      
    }
    if (temp > max) max = temp;
    console.log(max);
  });
  
  // if substr value i shigher than max set it to max
    
  return max;
}

// other solutions
solve = s => s.split(/[aeiou]+/).reduce((s, n) => Math.max(s, n.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0)), 0);

const solve = (s) => {
  return Math.max(...s.split(/[aeiou]+/).map((seq) => {
    return [...seq].reduce((r, c) => {
      return r + c.charCodeAt(0) - 96;
    }, 0);
  }));
};
