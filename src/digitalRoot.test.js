const hello = require('./digitalRoot');

describe('the digitalRoot canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('hello', () => {
  it('should return hello', () => {
    expect(hello()).toBe('hello');
  });
});
