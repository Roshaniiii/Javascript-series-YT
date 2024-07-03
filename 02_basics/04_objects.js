//to declare a object with the help of constructor
// const tinderUser = new Object() //singleton object

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = 'Herry';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: 'herry@gmaill.com',
  fullname: {              //fullname is object in itself
    userfullname: {        //this also
      firstname: 'Herry',
      lastname: 'Potter'
    }
  }
}

// console.log(regularUser.fullname.userfullname.lastname);

//Merging of objects:

const obj1 = {1: 'a', 2:'d'}
const obj2 = {3: 'e', 4:'u'}

// const obj3 = {obj1, obj2} // not a good way to merge objects

// const obj3 = Object.assign({}, obj1, obj2) // 'assign' method is used to merge two or more objects in a single one
//{}: 'target' and other objects are 'source'

const obj3 = {...obj1, ...obj2} //(...)is a spread operator used to merge of arrays and objects
// console.log(obj3);

//when value comes from database

// array object
const users = [  
  {  // object
    id: 123,
    email: 'herry@gmail.com'
  },
  {  // object
    id: 654,
    email: 'cchbcb@gmail.com'
  },
  {  // object
    id: 234,
    email: 'ncbdbc@gmail.com'
  },   
]   //array

// console.log(users[2].id);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // to get all the keys in a object
// console.log(Object.values(tinderUser)); // to get all the values in a object
// console.log(Object.entries(tinderUser)); // it display each key and their value as a array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to find whether the value is present in the data or not


//Destructuring of objects//

const course = {
  couresname: "Javascript",
  price: 999,
  instructor: 'me'
}

const {instructor: inst} = course; //{} destructor syntax // we can also assign a new or short name for the object key
console.log(inst);


// API concept //
//JSON: JAVA SCRIPT OBJECT NOTATION
// JSON : key and their values both are string
// { 
//   "name": 'Adventure',
//   "price": 'free',
//   "tranport": 'bus'
// }

//JSON can be in array format
// [
//   {},
//   {},
//   {},
//   {}
// ]

