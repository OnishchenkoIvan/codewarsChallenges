function findOdd(A) {
  if (A.length === 1) return A[0];
  const obj = {};
  for (let i of A) {
    if (obj[i] === undefined) {
      obj[i] = 1;
    } else obj[i] += 1;
  }
  const key = Object.entries(obj);
  for (let j of key) {
    if (j[1] % 2 !== 0) return +j[0];
  }
}
