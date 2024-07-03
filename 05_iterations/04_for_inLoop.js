// For in loop:

const myObj = {
  js : 'Javascript',
  cpp : 'C++',
  rb : 'ruby',
  swift : 'swift by apple'
}

for (const key in myObj) {
//  console.log(`${key} is shortcut for ${myObj[key]}`); // myObj[key] to print key values
}



// "for in " loop print the keys of array
const programming = ['js', 'cpp', 'rb', 'swift', 'java']

for (const key in programming) {
//  console.log(programming[key]);// programming[key]: values inside the array
}



// Map is not iterable
const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('AUS', "Australia")
map.set('IN', 'India')

for (const key in map) {
  // console.log(key); // nothing is gonna print
}