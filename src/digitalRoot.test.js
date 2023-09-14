const { digitalRoot, numberToString } = require('./digitalRoot');

describe('the digitalRoot canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('digitalRoot', () => {
  it('should return a number', () => {
    expect(typeof digitalRoot(1)).toBe('number');
  });
});

describe('numberToString', () => {
  it('should return a string', () => {
    expect(typeof numberToString(1)).toBe('string');
  });
});
