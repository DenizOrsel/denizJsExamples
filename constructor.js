function Person() {
  this.name = 'Max';
  this.greet = function(){
    console.log('Hello I am ' + this.name);
  }
}

Person.prototype.greetGeneral = function() {
  console.log('Hello ' + this.name);
}


var person = new Person();
person.greet();
person.name = 'Anna';
person.greetGeneral();


var anotherPerson = new Person();

console.log(person instanceof Person);
