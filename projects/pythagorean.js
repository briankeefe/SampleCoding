let all = [];
for (let i = 1; i <= 1000; ++i) {
	for (let j = 1; j <= 1000; ++j) {
		for (let k = 1; k <= 1000; ++k) {
			if (i + j + k === 1000) {
				all.push({ i, j, k });
			}
		}
	}
}
let res = all.filter(x => {
	return Math.pow(x.i, 2) + Math.pow(x.j, 2) === Math.pow(x.k, 2);
});
console.log(res[0].i * res[0].k * res[0].j);
