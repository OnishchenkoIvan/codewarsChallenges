var countBits = function(n) {
  const two = n.toString(2);
  const result = two.split('')
  const newResult = result.filter(item => item === '1');
  return newResult.length;
};