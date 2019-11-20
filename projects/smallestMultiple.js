/**
 * 2520 is the smallest number that can be divided by
 * each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible
 * by all of the numbers from 1 to 20?
 */

const divides = (big, small) => {
	if (big % small === 0) {
		return true;
	} else {
		return false;
	}
};
let big = 20;
let running = true;
let found = false;
while (!found) {
	big++;
	found = true;
	for (let i = 2; i <= 20; i++) {
		if (!divides(big, i)) {
			found = false;
		}
	}
}
console.log(big);
