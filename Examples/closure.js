function outer() {
	let outer_value = "hello";
	let another = "lel";
	return {
		getter: function() {
			console.log(outer_value);
			console.log(another);
			return "end";
		},
		setter: function() {
			outer_value = "anther hello";
			another = "ddd";
		},
	};
}

const closure = outer().getter;
console.log(closure());
