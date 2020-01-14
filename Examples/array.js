// transforming an array to an object.
const pokemon = [
	{ name: "charmander", type: "fire" },
	{ name: "squirtle", type: "water" },
	{ name: "bulbasaur", type: "grass" },
];

const transformData = (data) =>
	data.reduce((acc, curr) => {
		acc[curr.name] = { type: curr.type };
		return acc;
	}, {});

//function that flattens an array.
const reducer = (acc, item) =>
	acc.concat(Array.isArray(item) ? flat(item) : item);
const flat = (arr) => arr.reduce(reducer, []);

console.log(flat([1, 2, [3, [5, 6], 4], 3, 4]));
