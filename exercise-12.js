// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 12 - Converse minutes

// Converting minutes display
function konversiMenit(menit) {
    let hour = Math.floor(menit / 60);
    let minute = menit % 60;
    let formattedMinute = ('0' + minute).slice(-2);
    let convertedMinuteDisplay = hour + ':' + formattedMinute;
    
    return convertedMinuteDisplay;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00