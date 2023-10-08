import sum from '.';

test('function sum should work corrrectly', () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});
