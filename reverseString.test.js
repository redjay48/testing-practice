const reverseString = require('./reverseString');

test('Reverses the entire String', () => {
    expect(reverseString('hello')).toBe('olleh');
})