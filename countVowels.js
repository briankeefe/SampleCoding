/*
    A template for making practice problems to solve
*/


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string to count the vowels... ", (s) => {
    let tally = vowelCounter(s.toLowerCase());
    console.log(tally);
});

// const vowels = ['a', 'e', 'i', 'o', 'u']

class Tally{
    constructor() {
        this.a = 0;
        this.e = 0;
        this.i = 0;
        this.o = 0;
        this.u = 0;
    }

}

const vowelCounter = (str) => {
    let t = new Tally();
    for (let i = 0; i < str.length; ++i){
        let cur = str.charAt(i)
        if (cur === 'a') {
            t.a++;
        } else if (cur === 'e') {
            t.e++;
        } else if (cur === 'i') {
            t.i++;
        } else if (cur === 'o') {
            t.o++;
        } else if (cur === 'u') {
            t.u++;
        }
    }
    return t;
}