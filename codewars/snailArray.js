// Given an n x n array, return the array elements
// arranged from outermost elements to the middle
// element, traveling clockwise.

//   array = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]

const snail = (array) => {
  let rowTop = 0; // increment by 1 when finished with row
  let rowBottom = array.length - 1; // decrement by 1 when finished with row
  let columnBack = array[0].length - 1; // decrement by 1 when finsihed with column
  let columnFront = 0; // increment by 1 when finished with column
  const height = array.length;
  const width = array[0].length;

  console.log(`Height:${height} Width:${width}`);
  console.log(`RowTop:${rowTop} RowBottom:${rowBottom}...ColumnBack:${columnBack} ColumnStart:${columnFront}`);

  const result = [];
  // const map = {};

  const _rowElementPusher = (currentRow, startColumn, endColumn) => {
    // slice from original row the elements we need to push...
    const subArray = array[currentRow].slice(startColumn, endColumn + 1);
    console('ROW Pusher subArray: ', subArray);
    
    if (endColumn < startColumn) { // slicing right to left, REVERSE order...
      subArray.reverse();
      console.log('subArray REVERSED: ', subArray);
    }
    // ... and then push them to result array
    for (let i = 0; i < subArray.length; i++) {
      result.push(subArray[i]);
      console.log('ROW Pushed Element: ', subArray[i]);
    }
  };

  const _columnElementPusher = (currentColumn, startRow, endRow) => {
    // take each element from each row in column and push to result,
    // starting with rowTop and ending with rowBottom
    if (endRow > startRow) {
      for (let i = startRow; i <= endRow; i++) { // pushing from top row to bottom row
        // take row (which is i) and column( which is currentColumn)
        // to retreive specific element and push it to result
        result.push(array[i][currentColumn]);
        console.log('COLUMN Top-Down Pushed Element: ', array[i][currentColumn]);
      }
    } else {
      for (let i = endRow; i >= startRow; i--) { // pushing from bottom row to top row
        // take row (which is i) and column( which is currentColumn)
        // to retreive specific element and push it to result
        result.push(array[i][currentColumn]);
        console.log('COLUMN Bottom-Up Pushed Element: ', array[i][currentColumn]);
      }
    }
  };
  
  // Check for empty input array
  if (array.length === 1 || array.length === 0) return [[]];

  // Check for NON square array
  if (!(height === width)) return null;
  
  // test code
  let counter = 0;

  while (counter < 9) { // columnBack - columnFront >= 1 && rowBottom - rowTop >= 1
    // Take Top Row and push to array, increment rowTop
    _rowElementPusher(rowTop, columnFront, columnBack);
    console.log('+++rowTop incremented+++');
    rowTop++;

    // Take Back Column and push to array, decrement columnBack
    _columnElementPusher(columnBack, rowTop, rowBottom);
    console.log('---columnBack decremented---');
    columnBack--;
    
    // Take Bottom Row and push to array, decrement rowBottom
    _rowElementPusher(rowBottom, columnBack, columnFront);
    console.log('---rowBottom decremented---');
    rowBottom--;
    
    // Take Front Column and push to array, increment columnFront
    _columnElementPusher(columnFront, rowBottom, rowTop);   
    console.log('+++columnFront incremented+++');
    columnFront++;

    // test code
    counter++;
  }

  // PUSH first array to result, special case?
  // const _elementGrabber = (currentRow, currentColumn) => {
  //   if (row === 0) _rowElementPusher(array[0]);

  // }


  // Brute force
  // push first 2d array, element[0] of main array, to new array, this covers the top row
  // push the last element of each "row" until we hit the last element
  // push 2nd to last element of last 2d array in reverse order
  // push first element of each 2d array except the top and bottom arrays ( keep track of which arrasy are completely read/pushed with a map?) 
  // push elements of second 2d array (second row) except the last & first element
  // push 2nd to last elements of rows except 1st 2nd and last rows
  // push last row -1 elements in  reverse order to first index +1

  // need to kep track of what 'row' is being pushed, and which ones are complete...
  // need to kee  p track of what 'column' is being pushed and which ones are complete...

  return [];
};

// test code
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

snail(array);

// export default snail;
module.exports = snail;
