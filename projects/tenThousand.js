//Check if prime, iterate until sqrt of num
const isPrime = num => {
	for (let i = 2; i < num; ++i) {
		if (num % i === 0) {
			return false;
		}
	}
	return num > 1;
};
let primes = [2, 3, 5, 7, 11, 13];
let i = 13;
while (primes.length <= 10001) {
	i++;
	if (isPrime(i)) {
		primes.push(i);
	}
}
console.log(primes[10000]);
