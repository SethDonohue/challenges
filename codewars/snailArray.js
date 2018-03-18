// Given an n x n array, return the array elements
// arranged from outermost elements to the middle
// element, traveling clockwise.

//   array = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]

const snail = (array) => {

// Brute force
  // push first 2d array, element[0] of main array, to new array, this covers the top row
  // push the last element of each "row" until we hit the last element
  // push 2nd to last element of last 2d array in reverse order
  // push first element of each 2d array except the top and bottom arrays ( keep track of which arrasy are completely read/pushed with a map?) 
  // push elements of second 2d array (second row) except the last & first element
  // push 2nd to last elements of rows except 1st 2nd and last rows
  // push last row -1 elements in  reverse order to first index +1

  // need to kep track of what 'row' is being pushed, and which ones are complete...
  // need to keep track of what 'column' is being pushed and which ones are complete...


};

// export default snail;
module.exports = snail;
