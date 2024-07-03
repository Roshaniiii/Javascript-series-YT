// singleton // when you create a obj by a constructor
// Object.create();// method of constructor


// objects{} literals// way to declare objects

const mySym = Symbol('key1'); 

const JsUser = {
  [mySym]: 'mykey1', // NOTE: to print a symbol as a key in object and print, by using '[]' to display symbol type
  name: 'Dora',
  age: 32,
  location: 'Gujrat',
  email: 'dorathexplora@email.com',
  isLoggedIn: false,
  lastLoginDay: ['Monday', 'Wednesday']
}


// access the object key with . and []
// console.log(JsUser.location); 
// console.log(JsUser['email']);
// console.log(JsUser[mySym]);

JsUser.location = 'Rajasthan'; // change the object key value by = operator 
// console.log(JsUser.location);

// Object.freeze(JsUser); // to freeze the object so it can not accept any other changes
JsUser.name = 'Ashh'; // change can not br done since freeze method is in use
// console.log(JsUser);

//*************************************** functions *****************************************/

JsUser.greeting = function(){
  console.log('Hello JS user');
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());






