/*
		A template for making practice problems to solve
*/

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Enter a word... ', s => {
	if (hasSpaces(s)) {
		console.log('Please try again with only one word and no spaces');
	} else {
		//Pass the string to the pig latin converter
		//also convert to lowercase for consistency
		console.log(pigLatin(s.toLowerCase()));
	}
});

const hasSpaces = str => {
	return str.includes(' ');
};

const vowels = ['a', 'e', 'i', 'o', 'u'];

const pigLatin = str => {
	let consonant = '';
	for (let i = 0; i < str.length; ++i) {
		let cur = str.charAt(i);
		if (!vowels.includes(cur)) {
			consonant += cur;
		} else {
			break;
		}
	}
	let result = str.substring(consonant.length, str.length);
	result += consonant + 'ay';
	return result;
};
