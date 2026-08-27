//we can create an object using object literal syntax or using singleton pattern or using constructor function or using class syntax

//for symbol to use as key in object, we need to use bracket notation to access the value of that key. We cannot use dot notation to access the value of that key.
const mySymbol = Symbol("myKey1");

//object literal syntax
const jsUser = {
    name: "John Doe",
    "full name" : "Johnathan Doe",  //If we give spaces in key name, we need to give quotes to key name.
    "age": 30,   // even we dont give quotes to key name, it will be treated as string. 
    [mySymbol] : "myValue1",  //if we give symbol as key, it will be treated as string. So, we need to use bracket notation to access the value of that key.
    email: "john.doe@example.com",
    location: "New York",
    isLoggedIn: true,
    lastLogin: ["2023-01-01", "2023-01-02", "2023-01-03"]
}

console.log("jsUser email : ", jsUser.email)
console.log("jsUser email 2nd way : ", jsUser["email"])
//to access the key with spaces in name, we need to use bracket notation
console.log("jsUser full name : ", jsUser["full name"]) 
//console.log(jsUser.full name) //this will throw error as we cannot access the key with spaces in name using dot notation

//to access the key with symbol as name, we need to use bracket notation
console.log("jsUser mySymbol value :", jsUser[mySymbol]) //this will print the value of the key with symbol as name
console.log("type of symbol key in jsUser :", typeof mySymbol) //this will print the type of the symbol key

// //use of freeze() method to make the object immutable. It will prevent adding new properties, deleting existing properties and modifying existing properties of the object.
// jsUser.email = "sunny@google.com"
// Object.freeze(jsUser)
// jsUser.email = "newemail@example.com" //this will not change the email as the object is frozen
// console.log("jsUser email after freeze : ", jsUser)

console.log("============ to add as function in array  ==============")
jsUser.greeting = function() {   //here greeting is reference to the function,
    console.log("Hello Js user")
}
console.log("jsUser greeting : ", jsUser.greeting) //this will print the function definition

jsUser.greetingTwo = function() {
    console.log(`Hello Js user two 2, ${this.name}`); 
}

console.log("Hello Js user two 2: ",jsUser.greetingTwo())  

