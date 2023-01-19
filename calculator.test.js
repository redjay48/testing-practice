const calculator = require('./calculator');

test('Addition', () => {
    expect(calculator.add(2,3)).toBe(5);
});

test('Subtraction', () => {
    expect(calculator.subtract(5,2)).toBe(3);
});

test('Multiplication', () => {
    expect(calculator.multiply(4,6)).toBe(24);
});

test('Division', () => {
    expect(calculator.divide(12,6)).toBe(2);
});
