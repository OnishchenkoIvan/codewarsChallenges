function solution(list) {
  let result = "";
  let rangeStart = null;
  let rangeEnd = null;

  for (let i = 0; i < list.length; i++) {
    if (rangeStart === null) {
      // Starting a new range
      rangeStart = list[i];
      rangeEnd = list[i];
    } else if (list[i] === rangeEnd + 1) {
      // Extending the current range
      rangeEnd = list[i];
    } else {
      // Range finished
      if (result.length > 0) {
        result += ",";
      }
      if (rangeEnd === rangeStart) {
        result += rangeStart;
      } else if (rangeEnd === rangeStart + 1) {
        result += rangeStart + "," + rangeEnd;
      } else {
        result += rangeStart + "-" + rangeEnd;
      }
      rangeStart = list[i];
      rangeEnd = list[i];
    }
  }

  // Add the last range to the result
  if (result.length > 0) {
    result += ",";
  }
  if (rangeEnd === rangeStart) {
    result += rangeStart;
  } else if (rangeEnd === rangeStart + 1) {
    result += rangeStart + "," + rangeEnd;
  } else if (rangeEnd !== null) {
    result += rangeStart + "-" + rangeEnd;
  }

  return result;
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
