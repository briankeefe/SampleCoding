/**
 * The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
 */

//Check if prime, iterate until sqrt of num
const isPrime = num => {
	let sqrt = Math.floor(Math.sqrt(num));
	for (let i = 2; i < sqrt + 1; ++i) {
		if (num % i === 0) {
			return false;
		}
	}
	return num > 1;
};

let test = 600851475143;
let largest = 0;
for (let i = 0; i < Math.sqrt(test); ++i) {
	if (isPrime(i) && test % i == 0 && test != i) {
		largest = i;
	}
}
console.log(largest);
