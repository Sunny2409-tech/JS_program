console.log("sunny")
const obj1 = {lenght:10}
console.log("lenght" in obj1) 
console.log([] instanceof Array) // true

const obj2 = {name:"John", address:{city:"New York", zip:10001}}
console.log(obj2.address.city)
// console.log(obj2.contact.phone)  //throw error as TypeError: Cannot read properties of undefined (reading 'phone')
console.log(obj2.contact?.phone)

//ES5 version
function displayHalfValue(value){
    return value/2;
 } 
console.log(displayHalfValue(10)) 

//ES6 version
let dispHalfValue = (value) => value/2;
console.log(dispHalfValue(10))

let score = 33;
console.log("Score type : "+typeof score)

let score1 = "33";
console.log("Score1 type : "+typeof score1)

let score2 = Number(score1);
console.log("Score2 type : "+typeof score2)

let isloggedIn = 0;
let isloggedIn1 = Boolean(isloggedIn);
console.log("isloggedIn1 type : "+typeof isloggedIn1)
console.log("isloggedIn1 value : "+isloggedIn1)

const name = "Sunny";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`)