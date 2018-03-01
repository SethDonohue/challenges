function solution(s){
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function solution(str){
   return str.split('').reverse().join('');
}
