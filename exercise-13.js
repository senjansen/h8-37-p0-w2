// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 13 - Logic Challenge - X dan O

// Compare X counter and O counter
function xo(str) {
    let strLength =  str.length;
    let xCounter = 0;
    let OCounter = 0;

    for (let counter = 0; counter < strLength; counter++) {
        if (str[counter] === 'x') {
            xCounter += 1;
        } else if (str[counter] === 'o') {
            OCounter += 1;
        }
    }

    if (xCounter === OCounter) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true