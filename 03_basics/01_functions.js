
function sayMyName(){
    console.log("A");
    console.log("J");
    console.log("I");
    console.log("T");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

//addTwoNumbers(2, 4)

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
    
}

const result = addTwoNumbers(2, 4)

//console.log("Result:", result);

function loginUserMessage (username = "sam"){
    //if(username === undefined){
    if(!username){
    console.log("please enter a username");
    return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Ajit"))
//console.log(loginUserMessage("Ajit"));

function calculateCartPrice(val1, val2, ...num1){
   
    return num1
}

//console.log(calculateCartPrice(200, 400, 300, 340));

const user ={
    username: "Ajit",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
 //handleObject({
 //   username: "Twinkle",
//     price: 343 
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,100]));