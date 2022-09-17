function pigIt(str) {
  const strArr = str.split(" ").map((m) => {
    if (m === "!" || m === "?" || m === "," || m === ".") return m;
    const firstLetter = m[0];
    const restWord = m.slice(1);
    return `${restWord}${firstLetter}ay`;
  });
  return strArr.join(" ");
}

pigIt("Pig latin is cool");
