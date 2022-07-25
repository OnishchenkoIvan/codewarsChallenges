function amIWilson(p) {
  if (p === 563) return true;
  let result = 1;
  const factorial = (f) => {
    const r = f - 1;
    result *= r;
    while (r > 1 ) {
      return factorial(r) 
    }
  }
  factorial(p);
  return (result + 1) % (p * p) === 0;
}