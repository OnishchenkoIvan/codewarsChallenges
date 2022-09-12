function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n === 1) return [signature[0]];
  let result = signature;
  for (let i = result.length; i < n; i += 1) {
    result[i] = result[i - 1] + result[i - 2] + result[i - 3];
  }
  console.log(result);
  return result;
}
