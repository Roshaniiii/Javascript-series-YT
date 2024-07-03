// ***************************** if-else ***************************************//

// the code in 'if' executed only if the condition is 'true' otherwise not


const temp = 44;
// if (temp < 50) {
//   console.log('temp is less than 50');
// }else{
//   console.log('greater than 50');
// }
// console.log('executed'); // this will executed always since this is outside the scope


/* Comparision Operator
>, <, <=, >=, ==, !=, ===, !==
'===' called strict equal it also check the datatype {Ex: 2 === '2' code will not executed}
*/


const score = 200
// if (score > 100) {
//   const power = 'Fly'
//   console.log(`User power: ${power}`);
// }
// console.log(power); // power is not defined { const, let variable is not global variable so we can  ot access them outside the range of scope}


//Emplicite scope: written in one line { we assume that there is scope}
const balance = 800
// if (balance > 500) console.log('Out of danger');


// Nested if-else
// if (balance < 500) {
//   console.log('less than');
// } else if (balance == 500) {
//   console.log('equal to');
// } else {
//   console.log('More than');
// }

//  LOGICAL OPERATOR: '&&' AND, '||' OR, '!' NOT
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitCard){ // && both conditions should br true to execute the if statement
  console.log('Allow to buy courses');
} else {
  console.log(' you are not allow to buy these courses');
}

if (loggedInFromGoogle || loggedInFromEmail){ // || any one condition should be true to execute the if statement
  console.log('User Logged in');
} else {
  console.log('Logged in first');
}