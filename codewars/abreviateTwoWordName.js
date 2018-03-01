function abbrevName(name){

  //Separate.Split String by using space
  var splitString = name.split(" ");
   
  //take first character from each array item and put into a variable
  var results = "";
  for (i = 0; i < splitString.length; i++) {
    results += splitString[i].charAt(0);
    results += ".";
  }
  var final = results.slice(0, -1);
  return final.toUpperCase();
}
