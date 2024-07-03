// let a = 100; // global scope
// const b = 20;
// var c = 30; // var at global scope can access inside the block scope 

let a = 500;
if (true) { // block scope
  // let a = 400
  // console.log("Inner:", a);
} //

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope: 

function one(){ // parent function or first fun can not access the functions inside it
  const username = 'Herry'

  function two() { // child fun or inside functions can access the parent function
      const website = 'youtube'
      // console.log(username);// child function can easily access the parent function
  }
  // console.log(website); // shows error cause it's inside the scope of child function can not access by parent function
  two()
}
one()


if (true) { // parent 
  const username = 'Dora'
  if (username === 'Dora') { // child
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website); // error // can not access the data of child  
}
// console.log(username); // error // outside the scope


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function addone (num){
  return num + 1 // return fun
}
console.log(addone(9)); // call fun



// Holding a funtion in a variable
const addTwo = function (num){
  return num + 2
}
console.log(addTwo(5));