//const coding = ["js", "ruby", "java", "python", "cpp"]



//here forEach cant return any value when we use return it always give us undefined if we make new array to push the new value then we can print as our condition
// const values = coding.forEach( (item) => { 
//    // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//when we use arrow function in one line or without curly braces then we don't have to type "return"
// const newNums = myNums.filter ( (num) => num > 4)
// console.log(newNums);

// when we use curly braces then we have to write "return"
// const newNums = myNums.filter ( (num) => {
//    return num > 4
// })
// console.log(newNums);

// array return with forEach loop
// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4 ){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
{ title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
{ title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
{ title: 'Book Nine', genre: 'non-Fiction', publish: 1981, edition: 1989}
];

//books which genre is 'History'
let userBooks = books.filter( (bk) => bk.genre === 'History' )

// publish books after 1995 & genre is history
userBooks = books.filter( (bk) => { 
    return bk.publish > 1995 && bk.genre === "History"
})


//publish after 2009
userBooks = books.filter( (bk) => {
    return bk.publish > 2009
})

console.log(userBooks);
