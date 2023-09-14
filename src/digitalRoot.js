function digitalRoot(n) {
  let numStr = n.toString();
  let sum = n;

  while (sum >= 10) {
    sum = 0;
    for (let idx = 0; idx < numStr.length; idx++) {
      sum += parseInt(numStr[idx]);
    }
    numStr = sum.toString();
  }

  return sum;
}

module.exports = digitalRoot;
