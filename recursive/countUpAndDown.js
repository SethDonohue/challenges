

function toZero(int) {
  console.log(int);

  if (int > 0) {
    toZero(int - 1);
    console.log(int);
    return;
  } else if (int < 0) {
    toZero(int + 1);
    console.log(int);
    return;
  } else { // int === 0
    return;
  }
}

toZero(10);
toZero(-10);
