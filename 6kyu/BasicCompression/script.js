var compress = function (str) {
  const result = [];
  let count = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      result.push([count, str[i]]);
      count = 1;
    }
  }
  return JSON.stringify(result).length < str.length
    ? JSON.stringify(result)
    : str;
};

var decompress = function (str) {
  if (!str.includes("[")) {
    return str;
  }
  const compressedArray = JSON.parse(str);
  let decompressed = "";

  for (let i = 0; i < compressedArray.length; i += 1) {
    decompressed += compressedArray[i][1].repeat(compressedArray[i][0]);
  }
  return decompressed;
};

console.log(decompress('[[26,"a"],[1,"b"],[18,"a"]]'));
console.log(decompress("abcde"));
