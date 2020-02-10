const input = [1, "A", 2, "B", 3, "C", 4, "A", 5, "C", 6, "D"];
const output = input.reduce((acc, elm, idx, input) => {
	if (typeof elm === "string") {
		if (!acc[elm]) acc[elm] = [];
		acc[elm].push(input[idx - 1]);
	}
	return acc;
}, {});
console.log(output);

const desiredOutput = { A: [1, 4], B: [2], C: [3, 5], D: [6] };
