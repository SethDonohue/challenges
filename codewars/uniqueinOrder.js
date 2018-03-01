var uniqueInOrder=function(iterable){
  if(typeof iterable === 'string') iterable = iterable.split('');
  if(typeof iterable === 'number') iterable = iterable.toString().split('');
  
  let results = [];
  
  for(let i=0; i<iterable.length;i++){
    if(iterable[i] !== iterable[i+1]) results.push(iterable[i]);
  }
  return results;
}

var uniqueInOrder=function(iterable){
  if(typeof iterable === 'string') iterable = iterable.split('') ;
  if(typeof iterable === 'number') iterable = iterable.toString().split('');
  
  let results = [];
  for(let i = 0; i < iterable.length; i++) {
    if(iterable[i] !== iterable[i+1]) results.push(iterable[i]);
  }
  return results;
}
