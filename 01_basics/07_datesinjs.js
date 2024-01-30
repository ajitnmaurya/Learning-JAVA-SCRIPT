//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreateDate = new Date(2024, 0, 23)
//let myCreateDate = new Date(2024, 0, 23, 5, 3, 25) // year, month(0-janu 11 -dec), date, hour, minute, second
//let myCreateDate = new Date("2024-01-14")
let myCreateDate = new Date("01-08-2024")
//console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

newDate.toLocaleDateString('default', {
    weekday:"long",
    
})

console.log(newDate);