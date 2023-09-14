function digitalRoot(n) {
  if (n < 10) {
    return n;
  }
  return digitalRoot((n % 10) + digitalRoot(Math.floor(n / 10)));
}

module.exports = digitalRoot;
