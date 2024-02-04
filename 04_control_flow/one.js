//if
// const isUserloggedIn = true
// const temperature = 55

// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
// console.log("temperature is greater than 50")
// }
// console.log("executed");
//<, >, <=, >=, ==, !=, ===

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);



 //const balance = 1000
// //if(balance > 500) console.log("test"); // --- correct way
// if(balance > 500) console.log("test"), console.log("test2"); // --- wrong way / not good practice


// if(balance < 500){
//     console.log("less than 500 ");
// } else if(balance<700){
//     console.log("less than 700 ");
// } else if(balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("greater than 900");
// }


const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserloggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow to buy courses");
}
