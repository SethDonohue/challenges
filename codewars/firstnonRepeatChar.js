function firstNonRepeatingLetter(str) {
  console.log(str);
  // edge cases
//   if(str === '') return '';
  // Brute force with a copy
  // deep copy string,  then for str to lowercase
  const originalStr = (' ' + str).slice(1);
  str = str.toLowerCase();
  
  let map = {};
  
  for(let i = 0; i < str.length; i++) {
  // map each char with number of times seen and index seen at first time
    if(map[str[i]]) {
      map[str[i]] = -1;
      console.log('hit if, map: ', map);
    } else {
      map[str[i]] = `${i}`;    
      console.log('hit else, map: ', map);
      
    }
  }
  // when finished traversing string check map for chars with value 1, return associated index
  let filterMap = Object.keys(map).filter( key => !(map[key] === -1));
  console.log('Filtered map: ', filterMap);
  console.log('Map: ', map);
  console.log(originalStr[map[filterMap[0]]]);
  if(filterMap.length === 0) return '';
  return originalStr[map[filterMap[0]]];
}