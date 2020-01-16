function Person(name, gender, job) {
	this.name = name;
	this.gender = gender;
	this.job = job;
}

const sam = new Person("Seungnam", "M", "Programmer");
const jonae = new Person("Junghye", "F", "Writer");

Person.prototype.sayHello = function() {
	console.log(`hello, this is ${this.name} and I'm a ${this.job}`);
};

sam.sayHello();
console.log(sam.__proto__);
jonae.sayHello();

var GrandParent = function() {};
var Parent = function() {};

Parent.prototype = new GrandParent();
Parent.prototype.constructor = Parent;

const parentInstance = new Parent();
var isThatTrue = Parent.prototype.isPrototypeOf(parentInstance);
console.log(isThatTrue);

const what = Object.getPrototypeOf(parentInstance);
console.log(what);
Object.create()

