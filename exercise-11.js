// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 11 - Reverse Words

// Reverse Words
function balikKata(kata) {
    wordLength = kata.length;
    let reverseWord = '';

    for (let counter = 1; counter <= wordLength; counter++) {
        reverseWord += kata[wordLength - counter];
    }
    return reverseWord;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS