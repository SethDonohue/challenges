function formatWords(words){

  if (!words) return "";
  if (words.length < 0) return "";
  let filteredWords = words.filter( word => word.length > 0 );
  
  str = filteredWords.join();
  str = str.replace(/,(?=[^,]*$)/, ' and ');
  return str.replace(/[,]/g, ', '); 
  
}
