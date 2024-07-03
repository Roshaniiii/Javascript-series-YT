// for each loop:
// High Order Array Loop

const coding = ['js', 'java', 'ruby', 'cpp', 'python']

// coding.forEach( function (item) { // callbackfun means no need to name a function
//   console.log(item);
// })


// coding.forEach( (val) => {
//   console.log(val);
// } )


// function printMe (item){
//   console.log(item);
// }

// coding.forEach(printMe)


coding.forEach( (item, index, arr) => { // forEach have different parameters like items, index , array
  // console.log(item, index, arr);
})



// object in  Array 
const myCoding = [
  {
    languageName : "Javascript",
    languageFileName: 'js'
  },
  {
    languageName: 'Python',
    languageFileName: 'py'
  },
  {
    languageName: 'Java',
    languageFileName: 'java'
  }
]

myCoding.forEach( (item) => {
  // console.log(item.languageFileName);
})


///
//for each loop do not return the values
// const programmingLang = ['js', 'py', 'java', 'cpp', 'rb']

// const values = programmingLang.forEach( (item) => {
//   console.log(item);
//   return item
// })

// console.log(values); // undefined 



