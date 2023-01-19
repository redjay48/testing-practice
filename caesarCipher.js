function caesarCipher(string) {
    let stringArray = string.split('');
    let codeArray = [];
    let newString = '';
    stringArray.forEach(str => {
        codeArray.push(string.charCodeAt(string.indexOf(str)));
    });
    codeArray.forEach(code => {
        if(code === 90) {
            newString = newString + String.fromCharCode(65);
        } else if(code === 122) {
            newString = newString + String.fromCharCode(97);
        } else {
            newString = newString + String.fromCharCode(code + 1);
        }
    });
    return newString;
}