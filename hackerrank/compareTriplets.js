function solve(a0, a1, a2, b0, b1, b2) {
  let alice = 0;
  let bob = 0;
    
  a0 === b0 ? null : a0 > b0 ? alice++ : bob++;
  a1 === b1 ? null : a1 > b1 ? alice++ : bob++;
  a2 === b2 ? null : a2 > b2 ? alice++ : bob++;
    
  return [alice, bob];
}

console.log(solve(99, 1, 99, 1, 99, 1));
