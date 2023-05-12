function generateHashtag(str) {
  str = str.trim();
  if (str.length === 0) return false;
  let result = str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
  return result.length < 140 ? "#" + result : false;
}
