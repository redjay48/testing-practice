function analyzeArray(array) {
    let totl = 0;
    array.forEach(element => {
        totl = totl + element;
    });
    let avg = totl / array.length;

    let sortedArray = array.sort((a,b) => a - b);
    let minimum = sortedArray[0];
    let maximum = sortedArray[sortedArray.length - 1];
    let len = sortedArray.length;
    return {
        average: avg.toFixed(2),
        min: minimum,
        max: maximum,
        length: len
    }
}