const snail = (array) => {

  if (array.length === 1) return array[0];
  if (array.length === 0) return [];

  if (array.length !== array[0].length) return null;
  // use x and y coordinate system
  let xRight = array[0].length - 1;
  let yDown = array.length - 1;
  let xLeft = 0;
  let yUp = 0;
  let size = array.length;

  const result = [];
  
  // while there is rows left to process
  while (size > 1) {
  // when traveling right, xLeft increases, yUp increases
    for (let i = xLeft; i <= xRight; i++) result.push(array[yUp][i]);
    yUp++;
    // yUp //\\

    // when traveling down yUp increases, xRight decreases
    for (let j = yUp; j <= yDown; j++) result.push(array[j][xRight]);
    xRight--;
    // xRight //\\

    // when traveling left x decreases
    for (let i = xRight; i >= xLeft; i--) result.push(array[yDown][i]);
    yDown--;
    // yDown //\\
    // when travleing up y decreases
    for (let j = yDown; j >= yUp; j--) result.push(array[j][xLeft]);
    xLeft++;
    // xLeft //\\

    size -= 2;
    // size //\\
  }
  // If size is odd run this?
  if (array.length % 2 === 1) result.push(array[yDown][xLeft]);
  // result //\\
  return result;
};

module.exports = snail;


// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const arrayTwo = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// const arrayThree = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];

// const arrayFour = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 10, 11, 12],
//   [13, 14, 15, 16, 17, 18],
//   [19, 20, 21, 22, 23, 24],
//   [25, 26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35, 36],
// ];

// const arrayFive = [
//   [1, 2, 3, 4, 5, 6, 7],
//   [8, 9, 10, 11, 12, 13, 14],
//   [15, 16, 17, 18, 19, 20, 21],
//   [22, 23, 24, 25, 26, 27, 28],
//   [29, 30, 31, 32, 33, 34, 35],
//   [36, 37, 38, 39, 40, 41, 42],
//   [43, 44, 45, 46, 47, 48, 49],
// ];

// console.log(snail(array));
// console.log(snail(arrayTwo));
// console.log(snail(arrayThree));
// console.log(snail(arrayFour));
// console.log(snail(arrayFive));
