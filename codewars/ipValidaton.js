function isValidIP(str) {
  // make _helper to determine if octets are from 0-255 and contain only positive integers???

  // need to check that string is:
  // minimum 8 chars
  // maximum 15 chars
  // no leading zeros in any octet
  // only postive integers
  // PSEUDO:
  // BRUTE FORCE:
  // split to array
  // loop through array checking each octect with _helper

  // _helper should check for:
  // return false if any of these are not true
  // element is NOT empty, length < 1
  // 1 char to 3 chars, length >=1 && <=3
  // only positive ints, does not contain '-' character
  // no leading zeros, string[0] !== '0'

  // CODE:   
  // check for proper initial length
  if (str.length < 8 && str.length > 15) return false;
  
  // check if str contains non positive integers and !dots, use regex
  if (/[^0-9.]/.test(str)) return false;

  // octet helper function
  const _octetChecker = (octetString) => {
    if (octetString.length < 1 || octetString.length > 3) return false;
    if (octetString.startsWith('0') || octetString.startsWith('.')) return false;
    return true;
  };

  // convert to string and split
  const ipArr = str.split('.');
  for (octect of ipArr) {
    // call helper
    if(!_octetChecker(octect)) return false;
  }


  return true;
}
