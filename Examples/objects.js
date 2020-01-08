const person = {
	isHuman: false,
	printIntroduction: function() {
		console.log(`my name is ${this.name}. Am I human? ${this.isHuman}`);
	},
};
const me = Object.create(person);
me.name = "seungnam";
me.isHuman = true;
me.printIntroduction();
console.log(me.__proto__);
