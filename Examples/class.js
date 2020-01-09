class Animal {
	constructor(name = "anonymous", legs = 4, noise = "none") {
		this.type = "animal";
		this.name = name;
		this.legs = legs;
		this.noise = noise;
	}

	speak() {
		console.log(`${this.name} speaks ${this.noise}`);
	}
	walk() {
		console.log(`${this.name} walks with ${this.legs} legs`);
	}
	set eats(food) {
		this.food = food;
	}
	get dinner() {
		return `${this.name} eats ${this.food || "nothing"} for dinner.`;
	}
}

const duck = new Animal("ducky", 4, "quack");
duck.speak();
duck.eats("sam");
