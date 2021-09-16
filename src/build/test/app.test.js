const add = (a, b) => a + b;
test('Validate Add of two numbers', () => {
    expect(add(5, 2)).toBe(7);
});
