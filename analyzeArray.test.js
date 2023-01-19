const analyzeArray = require('./analyzeArray');

test('Analyze Array', () => {
    expect(analyzeArray([2,4,5,6,1])).toStrictEqual({
        average: "3.60",
        min: 1,
        max: 6,
        length: 5
    })
})