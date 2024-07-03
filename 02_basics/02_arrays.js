const marvelHeros = ['Spiderman', 'Thor', 'Hulk']
const dcHeros = ['flash',  'superman', 'batman' ]

// marvelHeros.push(dcHeros) // by this we get the array within the array 

// console.log(marvelHeros);
// console.log(marvelHeros[3] [2]); // batman // js takes the whole array as a single element 

// const allHeros = marvelHeros.concat(dcHeros); // it join the two elements oa arrays together as a new array which need a variable to store
// console.log(allHeros);

const allNewHeros =  [...marvelHeros, ...dcHeros]; // spread operator //(...) spread the elements in the arrays as individual to a single new array
// console.log(allNewHeros);

const anotherArr = [1, 4, 5, 3, [2,5,], 8, [6, 7, [3, 0]]];

const newAnotherArry = anotherArr.flat(3);
// console.log(newAnotherArry);


// console.log(Array.isArray('Dora')); //false
// console.log(Array.from('Dora')); // convert string into a array

// console.log(Array.from({name: 'Dora'}));// it will display empty array '[]'

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // convert variables into a single array

