const nextSmaller = (n) => {
  let min = minify(n);
  while (--n >= min) if (minify(n) === min) return n;
  return -1;
};

const minify = (n) => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, "$2$1");

nextSmaller(907);
