const digitalRoot = require('./digitalRoot');

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
