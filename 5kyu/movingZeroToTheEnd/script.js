function moveZeros(arr) {
  const result = [];
  let zero = 0;
  for (let i of arr) {
    if (i !== 0) {
      result.push(i);
    } else zero += 1;
  }
  while (zero > 0) {
    result.push(0);
    zero -= 1;
  }
  return result;
}
