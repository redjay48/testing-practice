function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

let calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

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


function analyzeArray(array) {
    
}
