//Functions//
// function sayName (){
//   console.log('D');
//   console.log('O');
//   console.log('R');
//   console.log('A');
// }

// sayName() // ():execution, 'sayName': reference

// function addTwoNo (num1, num2){ // parameters
//   console.log(num1 + num2);
// }
// addTwoNo(5, 7) // argument// calling a function

function addTwoNumber (num1, num2){
  // let result = num1 + num2
  // return result

  return num1 + num2
}
const result = addTwoNumber(5, 6)
// console.log('Result:' ,result);


function loginUserMessage(username){
  if (username === undefined) { // (!username)// execute same
    console.log("Please enter a username");
    return // after return the below code will not execute
  }else
  return `${username} just logged in`
}
// console.log(loginUserMessage('DoraTheExplora'));
// console.log(loginUserMessage()); // undefined // nothing is passed


 function calculateCardPrice(...num1){ // rest operator 
  return num1
 }
//  console.log(calculateCardPrice(300, 700, 600));


//object 
const user = {
  username: 'kiwii',
  price: 999
}

function handleObject(anyobject) {
  // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) // pass object as a agrument
handleObject({ // can also define a object in a function argument
  username: 'herry',
  price: 879
})

//array
const myArr = [200, 700, 600, 1000]

function returnThirdValue (getArray){
  return getArray[3] // return array at 3
}
// console.log(returnThirdValue(myArr)); // pass the array
console.log(returnThirdValue([200, 700, 400, 690]));