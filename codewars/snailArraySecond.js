const snail = (array) => {
  // use x and y coordinate system
  let w = array[0].length - 1;
  let h = array.length - 1;
  let x = 0;
  let y = 0;

  const result = [];
  // when traveling right, x increases
  for (let i = x; i < w; i++) {
    result.push(array[y][i]);
  }
  x = w;
  w--;

  // when traveling down y increases
  for (let j = y; j < h; j++) {
    result.push(array[j][x]);
  }
  y = h;
  h--;

  // when traveling left x decreases
  for (let i = x; i >= w; i--) {
    result.push(array[y][i]);
  }
  x = w - 1;

  // when travleing up y decreases
  for (let j = y; j >= h; j--) {
    result.push(array[j][x]);
  }
  y = h - 1;
  if (array[h][w]) result.push(array[h][w]);

  return result;
};


const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(snail(array));
