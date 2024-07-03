// array //

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(myArr[5]); // for element index

const myArr2 = new Array('dora', 7, 8, 'explora', 9)
// console.log(typeof myArr2[3]); //object // at 3 index element is string

//*************Array Methods**********************//

// myArr.push(11); // add element
// myArr.push(99);
// myArr.pop(); // delete last element in the array

// myArr.unshift(77); // add element at the starting of the array (not suitable for big data)
// myArr.shift(); // remove the first element of the data

// console.log(myArr.includes(9)); // true //qus type (display bollean value)
// console.log(myArr.indexOf(7)); // in 7th index

// const newArr = myArr.join(); // join bind the array and convert it in string

// console.log(typeof newArr); // string
// console.log(myArr);


//******************** slice, splice *********************************/
console.log('A', myArr);

const myN1 = myArr.slice(1, 3); // orriginal array display as same 
console.log(myN1);// [1, 2]
console.log('B', myArr);

const myN2 = myArr.splice(1, 3); // in which the given range will be remove from the original array
console.log('C', myArr);
console.log(myN2);// [1, 2, 3]

