function Ancestor (name) {
  this.name = name;
}

Ancestor.prototype.haveBaby = function() {
  var offspring = Object.create(Ancestor.prototype)
  offspring.name = 'Decendent ' + this.name;
  return offspring;
}

function Parent (name) {
	Ancestor.call(this, name);
}

Parent.prototype = Object.create(Ancestor.prototype)
Parent.prototype.constructor = Parent;

Parent.prototype.haveInstanceBaby = function() {
	var babyName = 'Baby ' + this.name;
    var baby = new Parent(babyName);
	return baby
}

Parent.prototype.haveObjectCreateBaby = function() {
	var babyName = 'Baby ' + this.name;
	var baby = Object.create(Parent.prototype);
	// note, at this point, you have created a new obj
	// and it is linked to Parent.prototype
	// however, babyName is not passed in....
	// Can you think of a way to add it back?
	return baby;
}

var ancestor = new Ancestor('Smith')
console.log('This is Ancestor ', ancestor)

var descendent = ancestor.haveBaby()
console.log('This is Descendent', descendent)

var mommy = new Parent('Kate');
console.log('This is Kate:   ', mommy)

var child = mommy.haveInstanceBaby('Nicky')
console.log('Nicky is Instance:  ', child)

console.log('child.constructor === Parent?' , child.constructor === Parent)


var child2 = mommy.haveObjectCreateBaby('Bob')
console.log('Bob is ObjectCreate:  ', child2)

child2 instanceof Parent