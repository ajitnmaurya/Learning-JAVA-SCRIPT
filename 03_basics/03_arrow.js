const user = {
    username: " Ajit",
    Price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sandeep"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Ajit"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "Ajit"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "Ajit"
//     console.log(this);
// }




// chai()

// const add = (num1, num2) =>{
//     return num1 + num2
// }

const add = (num1, num2) => num1 + num2

console.log(add(3,4));


// const myArray = [2, 5, 4, 7, 8]

// myArray.forEach(()=>())
// myArray.forEach(()=>())
// myArray.forEach(()=>())


