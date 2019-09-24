// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 7 - Looping

// No 1. Menyusun Barisan Bintang
let rows1 = 5; // input the number of rows

for (counter = 1; counter <= rows1; counter++) {
    console.log('*');
}

// No 2. Menyusun Barisan Bintang Dengan Nested Looping
let rows2 = 5; // input the number of rows
let asterisks = '';

for (let counterRow = 1; counterRow <= rows2; counterRow++) {
    for (let counterColumn = 1; counterColumn <= rows2; counterColumn++) {
        asterisks += '*';
    }
    console.log(asterisks);
    asterisks = '';
}

// No 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
let rows3 = 5; // input the number of rows
let asterisks2 = '';

for (let counterRow = 1; counterRow <= rows3; counterRow++) {
    for (let counterColumn = 1; counterColumn <= counterRow; counterColumn++) {
        asterisks2 += '*'
    }
    console.log(asterisks2);
    asterisks2 = '';
}