/*
    A program that takes in a string and reverses it
*/


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string... ", (s) => {
    console.log(reverse(s))
});

const reverse = (s) => {
    let res = ""
    for (let i = s.length - 1; i >= 0; --i){
        res += s.charAt(i)
    }
    return res;
}
