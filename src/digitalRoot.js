function digitalRoot(n) {
  let numStr = n.toString();
  let sum = 0;
  for (let idx = 0; idx < numStr.length; idx++) {
    sum += parseInt(numStr[idx]);
  }
  return sum;
}

module.exports = digitalRoot;
