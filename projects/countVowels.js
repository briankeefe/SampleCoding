/*
    Count the number of each vowel in the string
*/

class Tally {
	constructor() {
		this.a = 0;
		this.e = 0;
		this.i = 0;
		this.o = 0;
		this.u = 0;
	}
}

const vowelCounter = str => {
	const t = new Tally();
	for (let i = 0; i < str.length; i += 1) {
		const cur = str.charAt(i);
		if (cur === 'a') {
			t.a += 1;
		} else if (cur === 'e') {
			t.e += 1;
		} else if (cur === 'i') {
			t.i += 1;
		} else if (cur === 'o') {
			t.o += 1;
		} else if (cur === 'u') {
			t.u += 1;
		}
	}
	return t;
};

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Enter a string to count the vowels... ', s => {
	const tally = vowelCounter(s.toLowerCase());
	console.log(tally);
});

// const vowels = ['a', 'e', 'i', 'o', 'u']
