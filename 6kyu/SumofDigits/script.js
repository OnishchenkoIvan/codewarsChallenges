function digitalRoot(n) {
  if (n < 10) return n;
  let num = n.toString();
  if (num.length > 1) {
    const result = num.split("").reduce((acc, n) => {
      acc += +n;
      return acc;
    }, 0);
    console.log(result);
    return digitalRoot(result);
  }
}

digitalRoot(456);
