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
