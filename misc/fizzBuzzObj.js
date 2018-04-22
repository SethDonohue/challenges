

// takes in CLI arguments
// const n = 0;
// const pairs = {};

// const objCreator = (string => {

// });

// console.log(typeof process.argv[2], typeof process.argv[3]);

// if (typeof process.argv[2] === 'number' && typeof process.argv[3] === 'object') {
//   n = Number(process.argv[2]);
//   pairs = process.argv[3];
// } else if (typeof process.argv[2] === 'object' && typeof process.argv[3] === 'number') {
//   n = process.argv[2];
//   pairs = process.argv[0];
// } else {
//   throw 'Incorrect arguments, must be an int and object.';
// }


const fizzBuzz = (number, pairsObj) => {
  const pairsArr = Object.keys(pairsObj);
  let result = '';
  for (let i = 0; i <= number; i++) {
    let tempStr = '';
    for (let j = 0; j < pairsArr.length; j++) {
      if (i % pairsArr[j] === 0) tempStr += ` ${pairsObj[pairsArr[j]]}`;
    }
    if (tempStr.length > 1) {
      result += ` ${tempStr}`;
    } else {
      result += ` ${i}`;
    }
  }
  return result;
};

const pairs = {
  3: 'three',
  5: 'five',
  11: 'eleven',
};

console.log(fizzBuzz(99, pairs));
