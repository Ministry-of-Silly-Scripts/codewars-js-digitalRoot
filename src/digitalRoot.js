function digitalRoot(n) {
  let numStr = numberToString(n);
  let sum = 0;
  for (let idx = 0; idx < numStr.length; idx++) {
    sum += stringToNumber(numStr[idx]);
  }
  return sum;
}

function numberToString(n) {
  return n.toString();
}

function stringToNumber(n) {
  return parseInt(n);
}

module.exports = { digitalRoot, numberToString, stringToNumber };
