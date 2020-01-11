function outer() {
	let greeting = "hi, Im seungnam";
	return function inner() {
		console.log("i'm inside the inner function");
		console.log(greeting);
	};
}

const closure = outer();
closure();
