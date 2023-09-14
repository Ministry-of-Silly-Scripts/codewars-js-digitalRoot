function digitalRoot(n) {
  let numStr = n.toString();
  let sum = n;

  while (sum >= 10) {
    sum = 0;
    for (let ch in numStr) {
      sum += parseInt(numStr[ch]);
    }
    numStr = sum.toString();
  }

  return sum;
}

module.exports = digitalRoot;
