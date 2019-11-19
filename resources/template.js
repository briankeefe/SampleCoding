/*
	A template for making practice problems to solve
*/

//Helper method to split input
const separate = (s, n) => {
	let arr = s.split(' ');
	if (arr.length > n) {
		console.log('TOO MANY ARGUMENTS');
	} else if (arr.length < n) {
		console.log('TOO FEW ARGUMENTS');
	} else {
		return arr;
	}
};

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Ask a question... ', () => {});
