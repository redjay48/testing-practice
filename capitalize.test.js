const capitalize = require("./capitalize");

test('Capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});