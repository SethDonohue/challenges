// Given an n x n array, return the array elements
// arranged from outermost elements to the middle
// element, traveling clockwise.

//   array = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]

const snail = (array) => {

  // Check for empty input array
  if (array.length === 1) return array[0];
  if (array.length === 0) return [];
  
  // Check for NON square array
  if (array.length !== array[0].length) return null;

  let rowTop = 0; // increment by 1 when finished with row
  let rowBottom = array.length - 1; // decrement by 1 when finished with row
  let columnBack = array[0].length - 1; // decrement by 1 when finsihed with column
  let columnFront = 0; // increment by 1 when finished with column
  // const height = array.length;
  // const width = array[0].length;

  let odd = true; // assume it is odd first
  if (array.length % 2 === 0) odd = false; // array is even

  // console.log(`Height:${height} Width:${width}`);
  // console.log(`RowTop:${rowTop} RowBottom:${rowBottom}...ColumnBack:${columnBack} ColumnStart:${columnFront}`);

  const result = [];
  // const map = {};

  const _rowElementPusher = (currentRow, startColumn, endColumn) => {
    // console.log('============ RowPusher Called ============');
    // slice from original row the elements we need to push...
    let subArray = [];
    
    if (startColumn > endColumn) { // slicing right to left, REVERSE order...
      subArray = array[currentRow].slice(endColumn, startColumn + 1);      
      subArray.reverse();
      // console.log('subArray REVERSED: ', subArray);
    } else {
      subArray = array[currentRow].slice(startColumn, endColumn + 1);      
      // console.log('subArray: ', subArray);
    }
    // ... and then push them to result array
    for (let i = 0; i < subArray.length; i++) {
      result.push(subArray[i]);
      // console.log('ROW Pushed Element: ', subArray[i]);
    }
  };

  const _columnElementPusher = (currentColumn, startRow, endRow) => {
    // console.log('============ ColumnPusher Called ============');
    // take each element from each row in column and push to result,
    // starting with rowTop and ending with rowBottom
    if (endRow > startRow) {
      for (let i = startRow; i <= endRow; i++) { // pushing from top row to bottom row
        // take row (which is i) and column( which is currentColumn)
        // to retreive specific element and push it to result
        result.push(array[i][currentColumn]);
        // console.log('COLUMN Top-Down Pushed Element: ', array[i][currentColumn]);
      }
    } else {
      for (let i = startRow; i >= endRow; i--) { // pushing from bottom row to top row
        // take row (which is i) and column( which is currentColumn)
        // to retreive specific element and push it to result
        result.push(array[i][currentColumn]);
        // console.log('COLUMN Bottom-Up Pushed Element: ', array[i][currentColumn]);
      }
      // } else {
      //   for (let i = endRow; i >= startRow; i--) { // pushing from bottom row to top row
      //     // take row (which is i) and column( which is currentColumn)
      //     // to retreive specific element and push it to result
      //     result.push(array[i][currentColumn]);
      // console.log('COLUMN Bottom-Up Pushed Element: ', array[i][currentColumn]);
      //   }
    }
  }

  if (odd) {
    while (rowBottom - rowTop >= 0) { // rowBottom - rowTop >= 0 && columnBack - columnFront >= 0
      // Take Top Row and push to array, increment rowTop
      _rowElementPusher(rowTop, columnFront, columnBack);
      rowTop++;
      // console.log('+++rowTop incremented to:', rowTop);
      // add check to see if rowTop = rowBottom and colback = colFront
      if (rowBottom > rowTop) {
      // Take Back Column and push to array, decrement columnBack
        _columnElementPusher(columnBack, rowTop, rowBottom);
        columnBack--;
        // console.log('---columnBack decremented to:', columnBack);
      
        // Take Bottom Row and push to array, decrement rowBottom
        _rowElementPusher(rowBottom, columnBack, columnFront);
        rowBottom--;
        // console.log('---rowBottom decremented to:', rowBottom);
      
        // Take Front Column and push to array, increment columnFront
        _columnElementPusher(columnFront, rowBottom, rowTop);   
        columnFront++;
        // console.log('+++columnFront incremented to: ', columnFront);
      }
    }
  }

  if (!odd) {
    while (rowBottom - rowTop >= 0) { // rowBottom - rowTop >= 0 && columnBack - columnFront >= 0
      // Take Top Row and push to array, increment rowTop
      _rowElementPusher(rowTop, columnFront, columnBack);
      rowTop++;
      // console.log('+++rowTop incremented to:', rowTop);
      // add check to see if rowTop = rowBottom and colback = colFront
      if (rowBottom > rowTop) {
        // Take Back Column and push to array, decrement columnBack
        _columnElementPusher(columnBack, rowTop, rowBottom);
        columnBack--;
        // console.log('---columnBack decremented to:', columnBack);
      }

      // Take Bottom Row and push to array, decrement rowBottom
      _rowElementPusher(rowBottom, columnBack, columnFront);
      rowBottom--;
      // console.log('---rowBottom decremented to:', rowBottom);
      
      if (rowBottom > rowTop) {
        // Take Front Column and push to array, increment columnFront
        _columnElementPusher(columnFront, rowBottom, rowTop);
        columnFront++;
        // console.log('+++columnFront incremented to: ', columnFront);
      }
    }
  }
  return result;
};

// test code
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arrayTwo = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const arrayThree = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

// console.log(snail(array));
// console.log(snail(arrayTwo));
// snail(arrayThree);

// export default snail;
module.exports = snail;
