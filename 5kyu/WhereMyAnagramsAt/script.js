function anagrams(word, words) {
  const answer = [];
  const wordArr = word.split("").sort();
  words.forEach((w) => {
    const sort = w.split("").sort();
    if (sort.join("") === wordArr.join("")) {
      answer.push(w);
    }
  });
  return answer;
}

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
