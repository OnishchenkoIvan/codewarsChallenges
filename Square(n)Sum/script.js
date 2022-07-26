function squareSum(numbers){
  return numbers.reduce((acc, item) => {
    return acc = acc + item ** 2;
  }, 0)
}