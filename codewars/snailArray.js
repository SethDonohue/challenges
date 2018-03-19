const snail = (array) => {
  if (array.length === 1) return array[0];
  if (array.length === 0) return [];
  
  if (array.length !== array[0].length) return null;

  let rowTop = 0;
  let rowBottom = array.length - 1;
  let columnBack = array[0].length - 1;
  let columnFront = 0;

  const result = [];
  
  let odd = true;
  if (array.length % 2 === 0) odd = false;

  const _rowElementPusher = (currentRow, startColumn, endColumn) => {
    let subArray = [];
    
    if (startColumn > endColumn) {
      subArray = array[currentRow].slice(endColumn, startColumn + 1);      
      subArray.reverse();
    } else {
      subArray = array[currentRow].slice(startColumn, endColumn + 1);      
    }
    for (let i = 0; i < subArray.length; i++) {
      result.push(subArray[i]);
    }
  };

  const _columnElementPusher = (currentColumn, startRow, endRow) => {
    if (endRow > startRow) {
      for (let i = startRow; i <= endRow; i++) {
        result.push(array[i][currentColumn]);
      }
    } else {
      for (let i = startRow; i >= endRow; i--) {
        result.push(array[i][currentColumn]);
      }
    }
  };

  if (odd) {
    while (rowBottom - rowTop >= 0) {
      _rowElementPusher(rowTop, columnFront, columnBack);
      rowTop++;

      if (rowBottom > rowTop) {
        _columnElementPusher(columnBack, rowTop, rowBottom);
        columnBack--;
      
        _rowElementPusher(rowBottom, columnBack, columnFront);
        rowBottom--;
      
        _columnElementPusher(columnFront, rowBottom, rowTop);   
        columnFront++;
      }
    }
  }

  if (!odd) {
    while (rowBottom - rowTop >= 0) {
      _rowElementPusher(rowTop, columnFront, columnBack);
      rowTop++;
      if (rowBottom > rowTop) {
        _columnElementPusher(columnBack, rowTop, rowBottom);
        columnBack--;
      }

      _rowElementPusher(rowBottom, columnBack, columnFront);
      rowBottom--;
      
      if (rowBottom > rowTop) {
        _columnElementPusher(columnFront, rowBottom, rowTop);
        columnFront++;
      }
    }
  }
  return result;
};
module.exports = snail;
