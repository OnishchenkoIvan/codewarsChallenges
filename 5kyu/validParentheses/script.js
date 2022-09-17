function validParentheses(parens) {
  if (parens.length % 2 !== 0) return false;
  const parensArr = parens.split("");
  if (parensArr[0] === ")") return false;
  const pop = [];
  for (let i = 0; i < parensArr.length; i += 1) {
    if (parensArr[i] === "(") {
      pop.push("(");
    }
    if (parensArr[i] === ")") {
      if (pop.length === 0) return false;
      pop.pop();
    }
  }
  return pop.length === 0;
}
