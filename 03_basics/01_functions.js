
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
console.log(loginUserMessage("Ajit"))
