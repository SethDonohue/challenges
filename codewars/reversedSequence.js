const reverseSeq = n => {
  let array = [];
  while( n > 0){
    array.push(n)
    n--;
  }
  return array;
};
