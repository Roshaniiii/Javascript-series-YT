//this can use in object but bot in function
const user = {
  username: "James",
  price: 999,

  welcomeMessage: function(){
    // console.log(`${this.username}, Welcome to website`); // this refer to current context
    // console.log(this);
  }
}
// user.welcomeMessage()
// user.username = 'Samm'
// user.welcomeMessage()
// console.log(this); // empty object


// this can not be access in function
// function hello (){
//   let username = "james"
//   console.log(this.username); // undefined
// }
// hello()


// const one = function(){
//   let username = 'Herry'
//   console.log(this.username); //undefined
// }
// one()

//********************************** Arrow function****************************************/
// this can not be used in 'arrow function' it display undefined
const two = () => {
  let username = 'Herry'
  // console.log(this.username); // undefined
}
two()


// Arrow functions

// basic arrow functions
const addTwo = (num1, num2) => {
  return num1 + num2
}
// console.log(addTwo(4, 8));

// implicit return // no need of {} and to write return just do it in single line
const addThree = (num1, num2, num3) => num1 + num2 + num3
// console.log(addThree(3, 6, 7));

// another method // wrap the return values in () in place of  {},i f you don not write return keyword
const addTwo1 = (num1, num2) => (num2 * num1)
// console.log(addTwo1(6, 8));

//to return object
const newUser = (user1, user2) => ({username: 'dora'})
// console.log(newUser());