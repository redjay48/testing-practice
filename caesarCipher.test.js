const caesarCipher = require('./caesarCipher');

test('Caesar Cipher', () => {
    expect(caesarCipher('morning')).toBe('npsojoh');
});

test('Caesar Cipher', () => {
    expect(caesarCipher('zephyr')).toBe('afqizs');
});

test('Caesar Cipher', () => {
    expect(caesarCipher('HELLO')).toBe('IFMMP');
});

test('Caesar Cipher', () => {
    expect(caesarCipher('ZEBRA')).toBe('AFCSB');
});