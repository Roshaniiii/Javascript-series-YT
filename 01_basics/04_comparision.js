// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log('2' > 1);
// console.log('02' > 1);

// AVOID USING NULL & UNDEFINED//
// console.log(null > 0);
// console.log(null == 0);
// console.log(null != 0); // true
// console.log(null < 0);
// console.log(null >= 0); // true
// The reason is that an equality check == and comparisions > < >= <= woek differently.
// Comparisions convert null to a number, treating it as 0.

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined != 0); //true 
// console.log(undefined < 0);
// console.log(undefined >= 0);


/****** Strict check (===) ******/
console.log('2' === 2); // false
// '===' also checks the datatype