// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 9 - Function

// No 1. Function shoutOut()
function shoutOut () {
    return 'Halo Function!';
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

// No 2. Function calculateMultiply(num1,num2)
function calculateMultiply (num1, num2) {
    return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// No 3. Function processSentence()
function processSentence (name,age,address,hobby) {
    let sentence = 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
    return sentence;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"