/*
	Count the number of words in a string
*/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const isLetter = l => {
	if (l === ' ') {
		return false;
	} else {
		return true;
	}
};

const stringCounter = s => {
	s += ' ';
	let count = 0;
	let last = ' ';
	for (let i = 0; i < s.length; i += 1) {
		let cur = s.charAt(i);
		if (isLetter(last) && !isLetter(cur)) {
			count += 1;
		}
		last = cur;
	}
	return count;
};

rl.question('Count the words in a string... ', str => {
	console.log(stringCounter(str));
});
