// for of loop:
// in this object refer to the subject you want to use the for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]
// in array
for (const num of arr) {
  // console.log(num);
}


const greetings = "Hello World!"
// in string
for (const greet of greetings) {
  // console.log(`Each character is: ${greet}`);
  if (greet === 'o') {
    break
  }
}


// Maps:
// no duplicate entry

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('AUS', "Australia")
map.set('IN', 'India') // same entry will not get print

// console.log(map);

for (const [key, value] of map) { // [key, value] syntax used to destructure the array
  // console.log(key, ':', value);
}


/* Object is not iterable in "for of loop"
const myObj = {
  fruit1 : 'Apple',
  fruit2 : 'Orange',
  fruit3 : 'Banana' 
}

for (const fruitItem of myObj) {
  console.log(fruitItem);
}
*/