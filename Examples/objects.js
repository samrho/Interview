const person = {
	isHuman: false,
	printIntroduction: function() {
		console.log(`my name is ${this.name}. Am I human? ${this.isHuman}`);
	},
};

console.log(person.print);
