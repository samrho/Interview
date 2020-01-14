const obj = {
	a: 1,
	b: 2,
	c: 3,
};

const { a: first, ...second } = obj;
console.log(first, second);
