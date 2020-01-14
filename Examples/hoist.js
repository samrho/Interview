function outer() {
	var dlfksjd = 1;
	return function inner() {
		console.log(dlfksjd);
	};
}

const result = outer();
result();
