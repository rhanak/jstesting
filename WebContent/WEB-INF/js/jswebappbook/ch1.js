var Class = function() {
	var klass = function() {
		this.init.apply(this, arguments);
	};
	klass.something = "something";
	klass.prototype.init = function() {};
	return klass;
};

var Person = new Class;

Person.prototype.init = function() {
	
};

var person = new Person;
person.blah = "";