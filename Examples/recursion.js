function recsum(x) {
	if (x === 1) {
		return x;
	} else {
		return x + recsum(x - 1);
	}
}

function tailrecsum(x, acc = 0) {
	if (x === 0) {
		return acc;
	} else {
		return tailrecsum(x - 1, acc + x);
	}
}
console.time("regular");
console.log(recsum(10));

console.timeEnd("regular");

console.time("tail rec");
console.log(tailrecsum(10));

console.timeEnd("tail rec");
