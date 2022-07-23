function digPow(n, p){
  const arr = n.toString().split('');
  const result = arr.map((item) => {
    const itemcube = item ** p;
    p += 1;
    return itemcube;
  })
  .reduce((acc, sum) => {
    acc = acc + sum;
    return acc;
  }, 0);
  const newResult = result / n;
  if (newResult >= 1 && Number.isInteger(newResult)) {
    return newResult;
  } else return -1;
};