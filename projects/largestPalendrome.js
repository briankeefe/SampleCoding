/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const isPalen = str => {
	for (let i = 0; i < str.length; ++i) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

let largestPalendrome = 0;
for (let i = 999; i >= 100; --i) {
	for (let j = 999; j >= 100; --j) {
		let mult = i * j;
		let str = mult.toString();
		if (isPalen(str) && mult > largestPalendrome) {
			largestPalendrome = mult;
		}
	}
}
console.log(largestPalendrome);
//Tested and working
