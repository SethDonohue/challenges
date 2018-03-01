function findShort(s){
  let words = s.split(' ');
  words.sort(function (a, b) {
      return a.length - b.length;
  })
  return words[0].length;
}
