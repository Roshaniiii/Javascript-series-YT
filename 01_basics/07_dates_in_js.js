//Dates 

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate); //object

//let myCreatedDate = new Date(2024, 5, 26); // year, month, date//
//let myCreatedDate = new Date(2024, 5, 26, 5, 45, 36); // year, month, date, hour, min, sec//
let myCreatedDate= new Date("06-26-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // divide by 1000 to get in sec

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());



//********************************** */ Important************************************************//
console.log(newDate.toLocaleString('default', {
  weekday: 'long',
  day: '2-digit'
}));