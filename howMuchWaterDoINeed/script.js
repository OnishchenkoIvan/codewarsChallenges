function howMuchWater(water, load, clothes){
  if (clothes / load > 2) return 'Too much clothes';
  if (clothes / load < 1) return 'Not enough clothes';
//     const needWater = water * 1.1;
//     const diff = clothes - load;1
  if (clothes > load) {
    return console.log((Math.pow((water * 1.1), (clothes - load) / 10)).toFixed(2))
  }
}