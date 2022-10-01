function humanReadable(seconds) {
  let sec = seconds % 60;
  let min = Math.floor(seconds / 60);
  let hours = "00";
  if (min > 59) {
    hours = Math.floor(min / 60);
    min = min % 60;
  }
  const arr = [
    hours.toString().padStart(2, "0"),
    min.toString().padStart(2, "0"),
    sec.toString().padStart(2, "0"),
  ];
  return arr.join(":");
}

console.log(humanReadable(45296));
