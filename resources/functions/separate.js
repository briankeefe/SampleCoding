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