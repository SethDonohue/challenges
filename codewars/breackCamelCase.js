// complete the function
function solution(string) {
  let beginIndex = 0;
  let result = '';
//   let temp = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      let temp = string.slice(beginIndex, i) +' ';
      result += temp;
      beginIndex = i;
    }
    if(i === string.length -1) result += (string.slice(beginIndex, string.length));
  }
  return(result);
}
