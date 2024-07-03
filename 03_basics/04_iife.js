// Immediately Invoked Function Expression (IIFE)- 
// sometimes there is a problem with global scope pollutionor variables, to avoid the problem from variables or pollution of global scope we use iife

// to immediately execute a function 
// in which wrap the whole fun tion in ()

//named IIFE 'one'
(function one (){ 
  // console.log('Database connected');
})(); // sometimes error shows if ; is not written

// iife as arrow function
( (name) => { // passing argument
  console.log(`database connected to ${name}`);
})("Thomash"); // parameter
