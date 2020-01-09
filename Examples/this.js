// new keyword를 통해 생성자 함수를 이용하여 객체를 생성하는 코드. 여기서 this는 객체 그 자신이 된다.
var Person = function(name) {
	console.log(this);
	this.name = name;
};
var Man = new Person("sam");
console.log(Man.name);

/*
 * 객체의 프로퍼티로 함수가 들어왔을 때, 즉 method 호출을 할 때는 그 함수를 포함하고
 * 있는 객체에 this가 binding된다. 하지만 그 method 안에서 또 다른 함수를 그냥 호출할 때는
 * 전역 객체에 this가 binding된다.
 */
var val = "global variable";

var obj = {
	val: "nope",
	sayName: function() {
		console.log(this.val);
	},
	sayName2: function() {
		this.sayName.apply(obj);
	},
	sayName3: function() {
		(() => {
			console.log(this.val);
		})();
	},
	sayName4: function() {
		function print() {
			console.log(this.val);
		}
		print();
	},
};

// obj.sayName();
// obj.sayName2();
// obj.sayName3();
// obj.sayName4();

var value = 100;
var myObj = {
	value: 1,
	func1: function() {
		console.log(`func1's this.value: ${this.value}`);
		var func2 = function(val1, val2) {
			console.log(
				`func2's this.value: ${this.value}, val1: ${val1}, val2: ${val2}`,
			);
		};
		var func3 = func2.bind(this, "param1", "param2");
		func2.call(this, "param1", "param2");
		func2.apply(this, ["param1", "param2"]);
		func3();
		this.func4();
	},
	func4: () => {
		var value = "in func4";
		console.log(`func4's this.value: ${this.value}`);
	},
};
// myObj.func4();
// myObj.func1();

var value = 100;
var myObj = {
	value: 1,
	func4: () => {
		var value = 2;
		console.log(`func4's this.value: ${this.value}`);
	},
};
myObj.func4();

// console.log(global);
const func = () => {
	console.log(this);
};

func();

function test() {
	console.log(this);
}
