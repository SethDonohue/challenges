function insertDash(num) {
  let numArray = num.toString().split('');
  let answerArray = [];
  
  for( let i = 0; i < numArray.length-1; i++) {
    let var1 = parseInt(numArray[i]);
    let var2 = parseInt(numArray[i+1]);
       
    if(var1 % 2 !== 0 && var2 % 2 !== 0) {
      answerArray.push(`${var1}-`);
    
    }else {
      answerArray.push(var1);
    }
  }
  answerArray.push(numArray[numArray.length-1]);
  return answerArray.join('');     
  }
