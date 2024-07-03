// Loops offer choices


// For loop: //entry control loops
// checks the conditions before before entering the loop


//let i = 0 {variable declare}
// i < 10 {condition check}
//const element = i; {store in element}
// i++ {iteration of numbers}

for (let i = 0; i < 10; i++) {
  const element = i;
  if (i == 5) {
    // console.log('5 is best number');
  }
  // console.log(element);
}


for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and inner loop: ${i}`); 
    // console.log(i + '*' + j + '='  + i*j); // to print the table
  }  
}


let myArray = ['spiderman', 'hulk', 'antman', 'ironman', 'thor', 'batman']
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
  
}



//IMP Keyword: break and continue
// break: to get out of loop after meeting a certain condition
// continue: to skip iterations 

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log('Detected 5');
//     break
//   }
//   console.log(`Value of i is ${i}`);
// }
// break keyword : it breaks the control flow and comes out of the scope. After this keyword no code will executed within the scope


for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log('Detected 5');
    continue
  }
  console.log(`Value of i is ${i}`);
  
}
//continue Keyword: after meeting the condition, it only skip that value and not stop until the the loop finished
