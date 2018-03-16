function firstNonRepeatingLetter(str) {
  const originalStr = (' ' + str).slice(1);
  str = str.toLowerCase();
  const map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      map[str[i]] = -1;
    } else {
      map[str[i]] = `${i}`;
    }
  }
  const filterMap = Object.keys(map).filter(key => !(map[key] === -1));
  if (filterMap.length === 0) return '';
  return originalStr[map[filterMap[0]]];
}

// interesting solition that searches the str from both ends
function firstNonRepeatingLetter(str) {
  let temp = str.toLowerCase();
  for (let i = 0; i < temp.length; i++)
    if (temp.indexOf(temp[i]) === temp.lastIndexOf(temp[i]))
      return str[i];
  return "";
}
