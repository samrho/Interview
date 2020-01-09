var obj = {
	a: 1,
	b: 2,
};

const obj2 = { ...obj };
obj2.a = 3;

console.log(obj);

const obj3 = Object.assign({}, obj);
obj3.a = 3;
console.log(obj);
