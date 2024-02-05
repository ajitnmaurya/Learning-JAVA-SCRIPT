//for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){   // here val is parameter
//     console.log(val);
// }  )

//forEach with arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

// declare function first then use forEach

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// access of all the item, index, arr and each item have every value of arr
// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
} )