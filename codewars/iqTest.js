function iqTest(numbers){
  let array = numbers.split(' ');
  let indexArray = [];
  
  for(let i = 0; i < (array.length); i++){
    let currentModulo = array[i] % 2;
    
    if(currentModulo === 1){
      indexArray.push(1);
    } else {
      indexArray.push(0);
    }    
  }
  console.log('indexArray', indexArray);
  
  for(let i = 0; i < indexArray.length; i++){
    if(indexArray[i] !== indexArray[i+1] && indexArray[i] !== indexArray[i+2]){
      return i+1;
    }else if(indexArray[i] == indexArray[i+1] && indexArray[i] !== indexArray[i+2]){
      return i+3;
    }
  }
}
