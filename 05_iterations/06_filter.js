

/////Filter//////

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter return the values

// const newNums = myNums.filter( (num) => num > 6) // callback

const newNums1 = myNums.filter( (num) => {
  return num < 4
})


const newNums = []

myNums.forEach( (num) => {
  if (num  > 5) {
    newNums.push(num)
  }
})


// console.log(newNums);
// console.log(newNums1);


const myBooks = [
  {
    title: 'Book1',
    genre: 'Fiction',
    publish: 1998,
    edition: 2000
  },
  {
    title: 'Book2',
    genre: 'Science',
    publish: 2004,
    edition: 2022
  },
  {
    title: 'Book3',
    genre: 'History',
    publish: 1993,
    edition: 1999
  },
  {
    title: 'Book4',
    genre: 'Science',
    publish: 2000,
    edition: 2006
  },
  {
    title: 'Book5',
    genre: 'Fiction',
    publish: 2016,
    edition: 2024
  },
  {
    title: 'Book6',
    genre: 'Non-Fiction',
    publish: 1975,
    edition: 2008
  },
  {
    title: 'Book7',
    genre: 'History',
    publish: 1899,
    edition: 1997
  },
  {
    title: 'Book8',
    genre: 'Fiction',
    publish: 1900,
    edition: 2011
  },
  {
    title: 'Book9',
    genre: 'history',
    publish: 1896,
    edition: 2001
  },
  {
    title: 'Book10',
    genre: 'Non-Fiction',
    publish: 1998,
    edition: 2022
  }
]

const userBooks = myBooks.filter( (books) => books.genre === 'Fiction')

const userBookPublish = myBooks.filter( (books) => {
  return books.publish >= 2000 && books.genre === 'Science'
})

console.log(userBookPublish);
// console.log(userBooks);