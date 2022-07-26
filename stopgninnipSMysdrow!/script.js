function spinWords(string){
  const arr = string.split(' ');
  const check = arr.map((item) => {
    if (item.length > 4) {
      return item.split('').reverse().join('');
    } else return item;
  });
  return check.join(' ')
}