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
