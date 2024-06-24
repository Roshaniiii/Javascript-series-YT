// JS is a dynamicallt typed language

//****************************Primitive datatypes  (Call by value)*******************************//

//  7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Only null datatype is object other are same as them

const score = 99;
const scoreValue = 99.8; // represent both Integer and float datatype.

const isLoggedIn = false;
const outsideTemp = null;
let useEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123');
//Symbol 'uniquely' identify variables, even if two variables have the same data and datatype. 
//console.log(id === anotherId);  //false


const bigNumber = 7575675465434353n;// represent large no. that can not be represented by Number.


// *******************Non primitive (Call by reference)**********************************//

// all non primitive datatype is 'object'
// 'function' return a datatype of function though they also have an object data type (Object Function)
// others datatype is 'object'

// Array, Objects, Functions

const fruits = ['apple', 'mango', 'banana']; // array: represents a link-like collection of values

let myObj = { // object: represents a collection of key-value pairs
  name:'Dora',
  age : 12,
}

const myFun = function(){ // function: represents a reusable block of code that can be invoked or called with arguments
  //console.log("Hello World!");
}

//console.log(typeof bigNumber); //typeof use to determine the datatypes of the variables



//*************************************** Memory *****************************************//

// Stack (primitive), // we get the copy of the variable we declared
// Heap (Non primitive) // we get the reference of original value means, the changes refelect in original values

let  var1 = 'Good Morning!';

let var2 = var1;
var2 = 'Good Night';
console.log(var1);
console.log(var2);

let userOne = {
  gmail: 'userone@gmail.com',
  pin: 524643
}

let userTwo = userOne;

userTwo.gmail = 'usertwo@gmail.com';

console.log(userOne.gmail);
console.log(userTwo.gmail);