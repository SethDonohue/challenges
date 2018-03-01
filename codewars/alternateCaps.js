function capitalize(s){

  let evenStr = "", oddStr = "";
  let combinedArray = [];

  for (i = 0; i < s.length; i++) {
    if ( i % 2 === 0) {
    evenStr += (s.charAt(i).toUpperCase());
    evenStr += (s.charAt(i+1));
    }else{
      oddStr += (s.charAt(i-1));
      oddStr += (s.charAt(i).toUpperCase());
    }
  };
  
  if (s.length % 2 !== 0) oddStr += s.charAt(s.length-1);
  
  combinedArray.push(evenStr, oddStr);
  return combinedArray;
 };
