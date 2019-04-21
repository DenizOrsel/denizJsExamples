// 4 types of object creation

// 1st method
var person = {
  name: 'Max',
  age: 27
};

// 2nd method
var person = new Object();
person.name = 'Max';
person.age = 27;

// 3rd method
var person = Object.create(null);
person.name = 'Max';
person.age = 27;

// 4th method
function Person() {
  this.name = 'Max';
  this.age = 27;
}
var person = new Person();



/* console.log(person instanceOf Object); */
