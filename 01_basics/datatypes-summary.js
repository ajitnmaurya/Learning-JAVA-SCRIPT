// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 3585458625885545554n

//Reference (Non Primitive)

//Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ajit",
    age: 22,
}
const myFunction = function(){
console.log("Hello world");
}

console.log(typeof myFunction);

//************************************************************************

// stack (primitive), Heap (Non-primitive)

let myYoutubeName =  "Ajitkumarsingh"

let anothername = myYoutubeName
anothername = "ajitx"

console.log(anothername);
console.log(myYoutubeName);

let userOne = {
    email: "user@gmail.com",
    upi: "sdkfj@paytm"
}

let userTwo = userOne;

userTwo.email = "ajit@gmail.com"

console.log(userOne);
console.log(userTwo);