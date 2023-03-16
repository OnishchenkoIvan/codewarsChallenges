function solution(s) {
  const roman = ["I", "V", "X", "L", "C", "D", "M"];
  const romanToInteger = [1, 5, 10, 50, 100, 500, 1000];
  let integer = 0;
  const arr = s.split("");
  arr.reduce((acc, num, index) => {
    if (roman.indexOf(num) < roman.indexOf(arr[index + 1])) {
      return (integer -= romanToInteger[roman.indexOf(num)]);
    } else return (integer += romanToInteger[roman.indexOf(num)]);
  }, integer);
  return integer;
}
