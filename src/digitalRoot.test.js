const hello = require('./digitalRoot');

describe('hello', () => {
  it('should return hello', () => {
    expect(hello()).toBe('hello');
  });
});
