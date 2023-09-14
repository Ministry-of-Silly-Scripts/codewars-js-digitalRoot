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

  it('should return 1 to input equal to 1', () => {
    expect(digitalRoot(1)).toBe(1);
  });

  it('should return 2 to input equal to 11', () => {
    expect(digitalRoot(11)).toBe(2);
  });

  it('should return 6 to input equal to 12345', () => {
    expect(digitalRoot(12345)).toBe(6);
  });

  it('should return 1 to input equal to 10', () => {
    expect(digitalRoot(10)).toBe(1);
  });
});
