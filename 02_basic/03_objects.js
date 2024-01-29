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

// API // JSON
// {"results":[{"gender":"female","name":{"title":"Mrs","first":"Jacira","last":"Nascimento"},"location":{"street":{"number":6500,"name":"Rua Duque de Caxias "},"city":"Ribeirão Preto","state":"Rio de Janeiro","country":"Brazil","postcode":81407,"coordinates":{"latitude":"-78.7815","longitude":"169.1599"},"timezone":{"offset":"+9:00","description":"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},"email":"jacira.nascimento@example.com","login":{"uuid":"7a5ea5bb-c279-4bb0-b029-07935765329c","username":"organicbear502","password":"bravo","salt":"jELSSa8c","md5":"620b2f670cf2e9f3e1b53cce165b6c85","sha1":"f76dc324eb54f166c0834eb5a9230ff63f29a45b","sha256":"03e1c2c8ee64186ecb6bc7ea16597159aefcee5ff2c15cc06a54dcf721a8be60"},"dob":{"date":"1977-02-26T04:53:14.846Z","age":46},"registered":{"date":"2006-04-30T08:56:33.797Z","age":17},"phone":"(44) 3215-7765","cell":"(33) 9944-5327","id":{"name":"CPF","value":"484.976.736-62"},"picture":{"large":"https://randomuser.me/api/portraits/women/31.jpg","medium":"https://randomuser.me/api/portraits/med/women/31.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/31.jpg"},"nat":"BR"}],"info":{"seed":"fe8bc7aea42fd70d","results":1,"page":1,"version":"1.4"}}