function duplicateCount(text){
  const arr = text.toLowerCase().split('');
  const countItems = arr.reduce((acc, item) => {
  acc[item] = acc[item] ? acc[item] + 1 : 1;
  return acc;
}, {});
  const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
  console.log(result);
  return result.length;
}