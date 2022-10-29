function rgb(r, g, b) {
  const arr = [
    r <= 0 ? 0 : r >= 255 ? 255 : r,
    g <= 0 ? 0 : g >= 255 ? 255 : g,
    b <= 0 ? 0 : b >= 255 ? 255 : b,
  ];
  const result = arr.map((n) => n.toString(16).padStart(2, "0").toUpperCase());
  return result.join("");
}

console.log(rgb(300, 255, 255));
console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(173, 255, 47));
