function counter() {
	var val = 0;
	return function add() {
		val++;
		console.log(val);
	};
}

const b = counter();
const c = counter();
b();
b();

function generator(input) {
	let index = 0;
	return {
		next: function() {
			if (index < input.length) {
				return input[index++];
			}
			return "";
		},
	};
}

const myGenerator = generator("seun");
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
