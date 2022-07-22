function narcissistic(value) {
  const length = value.toString().length;
  if (value > 0 && length === 1) return true;
  const arr = value.toString().split('');
  const result = arr.reduce((acc, item) => {
    acc = acc + (+item) ** length;
    return acc;
  },0);

  return result === value;
};