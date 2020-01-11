var obj = {
	a: 1,
	b: 2,
};

const obj2 = { ...obj };
obj2.a = 3;

Object.getOwnPropertyNames(obj).forEach((key) => {
	console.log(key, obj[key]);
});
