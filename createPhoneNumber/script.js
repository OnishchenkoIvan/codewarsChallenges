function createPhoneNumber(numbers) {
  const code = numbers.slice(0, 3);
  const first = numbers.slice(3, 6);
  const end = numbers.slice(6);
  return `(${code.join('')}) ${first.join('')}-${end.join('')}`
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));