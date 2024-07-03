//******************************* truthy falsey*****************************************//

// Falsey values : 
// false, 0, -0, BigInt 0n, "", NaN, null, undefined

// Truthy values:
// other than the falsey values all are truthy like [], {}, "0", 'false', " ", function(){} - empty fun

const userEmail = 'dora@mail.com'//truthy
const userId = null // falsey

// if (userEmail && userId) {
//   console.log('Already have a account');
// } else {
//   console.log('You have to Sign In ');
// }


// to check if the array is empty or not
const listOfVeggies = [] // falsey

// if (listOfVeggies.length === 0) {
//   console.log('Array is empty');
// } else {
//   console.log('Array is not empty');
// }


// to check object is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log('Object is empty');
}


// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
// val1 = null ?? 13 ?? 16 // 13 first one

// console.log(val1);


//*******************************Terniary Operator:*************************// 

// condition ? true : false {syntax}

const teaPrice = 769

teaPrice >= 1000 ? console.log("Tea is expensive") : console.log("Tea is not expensive");
