// let score = null; //0
// words in purpal color use to convert any value to these written datatype
let score = undefined;

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN - Not a Number 

// "33" => 33
// "33a" => NaN
// true => 1 / false => 0

let isLoggedIn = 1;
let booleanNumber = Boolean(isLoggedIn); // to convert 1 in boolean type 
// console.log(booleanNumber);

let isLoggedIn1 = "";
let booleanNumber1 = Boolean(isLoggedIn1); //empty string shows false whereas non-empty string shows true boolean value
// console.log(booleanNumber1); 

// 1 => true / 0 => false
// "abc" => true / "" => false

let aNumber = 33;

let stringNumber = String(aNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *************************************************************Operations************************************************************//

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);                       /*
// console.log(2-2);
// console.log(2*2);                              Basic Operations
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);                                             */

let str1 = 'Good';
let str2 = ' Morning!';
let str3 = str1 + str2;
// console.log(str3); // to add two string together using + operator


// console.log('1'+ 2); // 12
// console.log('1' + '2'); // 12

// console.log('1' + 2 + 2); //122
// console.log(1 + 2 + '2'); // 32
// console.log(1 +'2'+ 2); //122

// console.log('1' +(2 + 2)); //14 
// // use of parenthesis () are crusial 

let gameCounter = 15;
gameCounter++; // postfix (x++)
console.log(gameCounter);

let gameCounter1 = 85;
++gameCounter1; // prefix (++x)
console.log(gameCounter1);