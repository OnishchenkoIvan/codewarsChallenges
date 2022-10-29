function rot13(message) {
  let result = [];
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let arr = message.split("");
  for (let i = 0; i < arr.length; i += 1) {
    let bigLetter = false;
    bigLetter = arr[i] === arr[i].toUpperCase();
    const index = alphabet.findIndex((x) => x === arr[i].toLowerCase());
    if (index === -1) result.push(arr[i]);
    if (index >= 13) {
      bigLetter
        ? result.push(alphabet[index - 13].toUpperCase())
        : result.push(alphabet[index - 13]);
    }
    if (index < 13 && index !== -1) {
      bigLetter
        ? result.push(alphabet[index + 13].toUpperCase())
        : result.push(alphabet[index + 13]);
    }
  }
  return result.join("");
}

console.log(rot13("abcdefghijklmnopqrstuvwxyz"));
