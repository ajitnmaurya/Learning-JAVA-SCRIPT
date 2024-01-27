// singleton
 //Object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ajit",
    "full name": "Ajit Singh",
    [mySym]: "mykey1",
    age: 22,
    location: "Bhubaneshwar",
    email: "ak9430025@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
 }

//  console.log(jsUser.email);
//  console.log(jsUser["email"]);
//  console.log(jsUser["full name"]);
//  console.log(jsUser[mySym]);

 jsUser.email = "ajit@chatgpt.com"

//  Object.freeze(jsUser)
jsUser.email = "ajit@outlook.com"

//  console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
// console.log(jsUser.greetingTwo());
// console.log();


//**********************************object4***********************


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Ajit"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// const navbar = () => {

// }

// navbar(company = "Ajit")

// {
//     name: "hitesh",
//     coursename: "js",
//     price:"free"
// }
