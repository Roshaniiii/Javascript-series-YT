// While Loop: // entry control loops
// checks the conditions before before entering the loop

let index = 0;
while (index <= 10) {
  // console.log(`Value of index ${index}`);
  index = index + 2
}


let myArray = ['batman', 'flash', 'spiderman']
let arr = 0
while (arr < myArray.length) {
  // console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1
}


// do while loop: // exit control loop
// the code executed atleast one then condition get checked

let score = 1

do {
  console.log(`Score is: ${score}`);
  score++
} while (score <= 10);