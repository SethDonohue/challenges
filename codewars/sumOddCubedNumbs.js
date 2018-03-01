function cubeOdd(arr) {
  var newArr = arr.map(int => Math.pow(int, 3)).filter( int => int % 2 !== 0).reduce(((a,b) => a + b), 0);
  return (isNaN(newArr)) ? undefined : newArr;

}
