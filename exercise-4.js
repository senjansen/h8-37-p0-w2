// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 4 - Switch-Case

// Declare Variables
let tanggal = 1; // between 1-31
let bulan = 2; // between 1-12
let tahun = 1900; // between 1900-2200

// Switch-Case conditional
switch (bulan) {
    case 1:
        console.log(tanggal + ' Januari ' + tahun);
        break;
    case 2:
        console.log(tanggal + ' Februari ' + tahun);
        break;
    case 3:
        console.log(tanggal + ' Maret ' + tahun);
        break;
    case 4:
        console.log(tanggal + ' April ' + tahun);
        break;
    case 5:
        console.log(tanggal + ' Mei ' + tahun);
        break;
    case 6:
        console.log(tanggal + ' Juni ' + tahun);
        break;
    case 7:
        console.log(tanggal + ' July ' + tahun);
        break;
    case 8:
        console.log(tanggal + ' Agustus ' + tahun);
        break;
    case 9:
        console.log(tanggal + ' September ' + tahun);
        break;
    case 10:
        console.log(tanggal + ' Oktober ' + tahun);
        break;
    case 11:
        console.log(tanggal + ' November ' + tahun);
        break;
    case 12:
        console.log(tanggal + ' Desember ' + tahun);
        break;
    default:
        console.log('Bulan yang dimasukkan salah!')
}