const sum = require('./sum');

//first TC
test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('adds 2 + 3 to equal 6', () => {
  expect(sum(2, 3)).toBe(6);
});