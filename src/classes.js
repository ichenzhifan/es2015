/**
ES2015 classes are a simple sugar over the prototype-based OO pattern.
Having a single convenient declarative form makes class patterns easier to use, 
and encourages interoperability. Classes support prototype-based inheritance, 
super calls, instance and static methods and constructors.
*/

class Parent{
	constructor(text){
		this.text = text;
	}

	say(){
		return this.text;
	}
	static sayAgain(){
		// By default, this.name point to class name.
		// this.name => "Parent"
		return 'static :' + this.name;
	}
}

class Child extends Parent{
	constructor(age, text){
		super(text);
		this.age =age;
	}

	getAge(){
		return this.age;
	}

}

// var p = new Parent('John');
// alert(p.text);
// alert(p.say());
// alert(Parent.sayAgain());

//
let c = new Child(24, 'Jake');
alert(c.age);
alert(c.getAge());
alert(c.text);
alert(c.say());