const { digitalRoot, numberToString, stringToNumber } = require('./digitalRoot');

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

  // it('should return 2 to input equal to 11', () => {
  //   expect(digitalRoot(11)).toBe(1);
  // });
});

describe('numberToString', () => {
  it('should return a string', () => {
    expect(typeof numberToString(1)).toBe('string');
  });
});

describe('stringToNumber', () => {
  it('should return a number', () => {
    expect(typeof stringToNumber('1')).toBe('number');
  });
});
