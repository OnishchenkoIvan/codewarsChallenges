function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];
  const positiveArr = input.filter((a) => a > 0);
  const negativeArr = input.filter((a) => a < 0);
  const sumNegativeArr = negativeArr.reduce((acc, a) => {
    return acc + a;
  }, 0);
  return [positiveArr.length, sumNegativeArr];
}
