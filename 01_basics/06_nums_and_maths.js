const score = 199;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// // we can use different string method, after convert the Number type to String
// console.log(balance.toString().charAt ('a'));


const otherNum = 476.1870;
// console.log(otherNum.toFixed(2)); // 476.19
// console.log(otherNum.toPrecision(3));// 476

const number = 100000000
// console.log(number.toLocaleString('en-IN')); //10,00,00,000 {'en-IN'} is used for Indian Number system

// console.log(Number.MAX_VALUE);


//*********************************************************** Maths ***********************************************************/

// console.log(Math);
// console.log(Math.abs(-7)); //7
// console.log(Math.round(7.7)); //8
// console.log(Math.ceil(5.1)); //6 (top value)
// console.log(Math.floor(8.7)); //8 (bottom value)
// console.log(Math.min(4, 6, 8, 3, 0, 2, 1)); // 0 (lowest value in the array)
// console.log(Math.max(4, 6, 8, 3, 0, 2, 1)); // 8 (Highest value in the array)

//console.log(Math.random()); // It generates a random no. btw and 1 
// console.log((Math.random()*10) + 1); // we do +1 so that the value can not be 0


const  min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Formula  if min and max is given
