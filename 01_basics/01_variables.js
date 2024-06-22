const accountId = 1409779;
let accountEmail = 'roshani@gmail.com';
var accountPassword = '1234567354';
accountCity = 'Bengaluru'; // we can store a value without a variable but this is not suppose to be used in js
let accountState; // since the value is not define the output will show undefined

// accountId = 2; 
accountEmail = 'gusain@gmail.com';
accountPassword ='140999';
accountCity = 'Jaipur';


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);


