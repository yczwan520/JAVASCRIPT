// Question:
// 1. 
const obj = {
  name: 'kyle',
  age: 30,
  sayHello: function() {
    function test() {
      console.log(`I am ${this.name} and I am ${this.age} years old`)
    }

    test()
  }
};

obj.sayHello()
// Result: I am  and I am undefined years old
// Reason: If this keyword is in a regular function (not in strict mode), it refers to the global object(window)

// 2. 
“use strict”;
			
var name = ‘kyle’;
			var age = 30;
function outerFunc () {
	return function () {
	console.log(`I am ${this.name} and I am ${this.age} years old`)
}
}

const inneFunc = outerFunc();
inneFunc();
// Result: I am undefined and I am undefined years old
// Reason: If this keyword is in a regular function (in strict mode), it refers to undefined


// 3.
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

let fullName = person.fullName;

fullName();
// Result: Nothing
// Reason: If this keyword is in a regular function (not in strict mode), it refers to the global object(window), there are no firstName & lastName  in Window.

// 4.
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
	firstName:"Kyle",
  	lastName: "Zhang",
}

person2.fullName = person.fullName;

console.log(person2.fullName());

let fullName = person.fullName;
console.log(fullName())

// Result: Kyle Zhang
// undefined undefined
// Reason:
//  person2.fullName = person.fullName, add the method: fullName to object person2, this refers to object person2, therefore this.firstName = “Kyle” and lastName = “Zhang”
// let fullName = person.fullName; assign method: fullName to variable, method become regular function, this keyword refers to undefined

// 5.
"use strict";
			
var name = "kyle";
var age = 30;
const obj = {
    name: 'azure',
    age: 28
}

function outerFunc () {
	return function () {
	console.log(`I am ${this.name} and I am ${this.age} years old`)
}
}


const inneFunc = outerFunc().bind(obj);
inneFunc();

// Result: I am azure and I am 28 years old
// Reason: through bind()method, bind function outerFunc() to be method of object obj, this refers to object obj.

// 6.
"use strict";
			
var name = "kyle";
var age = 30;
const obj = {
    name: 'azure',
    age: 28
}

function outerFunc () {
	return () => {
	console.log(`I am ${this.name} and I am ${this.age} years old`)
}
}

const inneFunc = outerFunc().bind(obj);
inneFunc();
	
// Result: I am kyle and I am 30 years old
// Reason: var name = "kyle";var age = 30; create name and age in window.
// This keyword in the arrow function always refers to parent scope, parent scope is window.
