function titleCase(title, minorWords) {
  
  if(title.length < 1) return '';
  let lowerCase = title.toLowerCase();
  title = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  let titleArray = title.split(' ');
  let minorArray = minorWords ? minorWords.toLowerCase().split(' ') : [0];
  
  for(let i = 1; i < titleArray.length; i++){
    if(!minorArray.includes(titleArray[i])){
      titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
    }
  }
  return titleArray.join(' ');
}

function titleCase(title, minorWords) {
  
  //error checking
  if(title.length < 1) return '';
  // split both strings into arrays by spaces
  let lowerCase = title.toLowerCase();
  title = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  let titleArray = title.split(' ');
  console.log(minorWords);
  let minorArray = minorWords ? minorWords.toLowerCase().split(' ') : [0];
  
  console.log('lowercase', titleArray);
  
  //loop over array, if the element is NOT in the minorWords array then capitalize it.
  for(let i = 1; i < titleArray.length; i++){
    if(!minorArray.includes(titleArray[i])){
      titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
    }
  }
  return titleArray.join(' ');
  
  
  //join the mian arrya back together with spaces and return
}
