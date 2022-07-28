function isPrime(num) {
  if (num < 2) {
    return false;
  }
  const max = Math.sqrt(num);
  for (let i = 2; i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}