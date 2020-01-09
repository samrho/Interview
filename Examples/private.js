// var Person = (function() {
// 	var nameSymbol = Symbol("name");

// 	function Person(name) {
// 		this[nameSymbol] = name;
// 	}

// 	Person.prototype.getName = function() {
// 		return this[nameSymbol];
// 	};

// 	return Person;
// })();

// var p = new Person("John");
// console.log("Person 3 name: " + p.name);
// delete p.name;
// console.log("Person 3 name: " + p.getName() + " — stays private.");
// console.log("Person 3 properties: " + Object.getOwnPropertyNames(p));

// var sym1 = Symbol("a");
// var sym2 = Symbol("b");
// var sym3 = Symbol("a");

// console.log("sym1 === sym1: " + (sym1 === sym1));
// console.log("sym1 === sym2: " + (sym1 === sym2));
// console.log("sym1 === sym3: " + (sym1 === sym3));

var Person = (function() {
	function Person(name) {
		this.getName = function() {
			return name;
		};
	}

	return Person;
})();

var p = new Person("John");
console.log("Person 2 name: " + p.getName());
delete p.name;
console.log("Person 2 name: " + p.getName() + " stays private.");
