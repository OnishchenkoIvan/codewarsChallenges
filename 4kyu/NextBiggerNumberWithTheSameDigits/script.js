function nextBigger(num) {
  const digits = Array.from(num.toString()).map(Number);

  // Find the first decreasing digit from the right
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i < 0) {
    // The digits are in descending order, so there's no bigger number
    return -1;
  }

  // Find the smallest digit to the right of i that is greater than digits[i]
  let j = digits.length - 1;
  while (j > i && digits[j] <= digits[i]) {
    j--;
  }

  // Swap digits[i] and digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Reverse the digits to the right of i
  digits.splice(i + 1, digits.length - i - 1, ...digits.slice(i + 1).reverse());

  // Convert the array back to a number
  const result = Number(digits.join(""));

  return result > num ? result : -1;
}
