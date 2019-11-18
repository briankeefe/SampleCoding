/*
    Check to see if a string is a palendrome
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ask a question... ", (s) => {
    printer(runner(s))
});

const runner = (str) => {
    for (let i = 0; i < str.length / 2; i++){
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true;
}

const printer = (ans) => {
    if (ans) {
        console.log("This is a palendrome");
    } else {
        console.log("This is not a palendrome");
    }
}