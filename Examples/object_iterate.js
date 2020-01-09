const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 7,
};

for (const key in obj) {
	console.log(`key: ${key}, value: ${obj[key]}`);
}

Object.keys(obj).forEach((key) => {
	console.log(`key: ${key}, value: ${obj[key]}`);
});

Object.values(obj).forEach((value) => {
	console.log(`key: idk, value: ${value}`);
});

Object.entries(obj).forEach(([key, value]) => {
	console.log(`key: ${key}, value: ${value}`);
});

Object.getOwnPropertyNames(obj).forEach((key) => {
	console.log(`key: ${key}, value: ${obj[key]}`);
});
