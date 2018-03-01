function isNice(arr){
  console.log(arr);
  console.log(arr.every(x => arr.includes(x-1) || arr.includes(x+1)));

  return arr.length>1 && arr.every(x => arr.includes(x-1) || arr.includes(x+1));
}

function isNice(arr){
  let val = true;

  if(arr.includes(arr[0]+1)||arr.includes(arr[0]-1)) {
    val = true;
  } else {
    return false;
  }
  
  if(arr.includes(arr[arr.length-1]-1) || arr.includes(arr[arr.length-1]+1)){
    val = true;
  }else{
    return false;
  }

  for(let i = 1; i < (arr.length-1); i++) {
    if(arr.includes((arr[i]-1)) || arr.includes((arr[i]+1))) {
      val =  true;
    }else{
      return false;
      console.log('is not a nice aray');
    }
  }
return val;
}
