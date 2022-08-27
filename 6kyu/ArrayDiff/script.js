function arrayDiff(a, b) {
  let arr = a;
  for (let minus of b) {
    arr = arr.filter((arr) => arr !== minus);
  }
  return arr;
}

arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2], [1]);
arrayDiff([1, 2, 2], [2]);
arrayDiff([1, 2, 2], []);
arrayDiff([], [1, 2]);
arrayDiff([1, 2, 3], [1, 2]);
