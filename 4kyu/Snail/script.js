snail = function (array) {
  let result = [];
  while (array[0] !== undefined) {
    if (array[0] === undefined) break;
    array[0].forEach((num) => result.push(num));
    array.splice(0, 1);

    if (array[0] === undefined) break;
    array.forEach((item, index) => {
      result.push(item[item.length - 1]);
      array[index].splice(item.length - 1);
    });
    if (array[0] === undefined) break;
    array[array.length - 1].reverse().forEach((num) => result.push(num));
    array.splice(-1, 1);
    if (array[0] === undefined) break;
    array.reverse().forEach((item, index) => {
      result.push(item[0]);
      array[index].splice(0, 1);
    });
    array.reverse();
  }

  return result;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// [1, 2, 3, 6, 9, 8, 7, 4, 5]
