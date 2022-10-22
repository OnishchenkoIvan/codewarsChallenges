function getCount(str) {
  let count = 0;
  const vowel = ["a", "e", "i", "o", "u"];
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i += 1) {
    if (vowel.some((el) => el === strArr[i])) count += 1;
  }
  return count;
}

console.log(getCount("abracadabra"));
