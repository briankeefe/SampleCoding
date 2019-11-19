/*
	Product Inventory Project – Create an application which
	manages an inventory of products. Create a product class
	which has a price, id, and quantity on hand. Then create
	an inventory class which keeps track of various products
	and can sum up the inventory value.
*/

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

let ids = [];

const rand = l => {
	let ans = 0;
	do {
		ans = parseInt(Math.random() * Math.pow(10, l));
	} while (ans < Math.pow(10, l - 1) && !ids.includes(ans));
	ids.push(ans);
	return ans;
};

class Product {
	constructor(i, p, q, n) {
		this.id = i;
		this.price = p;
		this.quantity = q;
		this.name = n;
	}
}

class Inventory {
	constructor(pa) {
		this.products = pa;
		this.money = 0;
		this.total();
	}

	total() {
		let tally = 0;
		for (let p of this.products) {
			tally += p.price * p.quantity;
		}
		this.money = tally;
	}

	add(p) {
		this.products.push(p);
		this.total();
	}
}

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdin,
});
let brand = new Product(rand(4), 4, 4, 'Paper');
let prodArray = [brand];
let inv = new Inventory(prodArray);
const loopQuestion = () => {
	rl.question('P & Q... ', b => {
		let a = separate(b);
		let n = a[0];
		let p = parseInt(a[1]);
		let q = parseInt(a[2]);
		let prod = new Product(rand(4), p, q, n);
		inv.add(prod);
		console.log(inv);
		loopQuestion();
	});
};

loopQuestion();
