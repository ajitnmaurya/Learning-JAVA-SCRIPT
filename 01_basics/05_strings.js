const name = " Ajit "
const repoCount = 5

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String('wukong-ajit')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4)

console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);


const newStringOne = "    ajit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://ajit.com/ajit/%20singh"

console.log (url.replace('%20', '_'))

console.log(url.includes('rohit'));

console.log(gameName.split('_'));