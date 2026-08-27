const user = {
    username: "Sunny",
    price: 100,
    
    welcomeMessage: function(){
         console.log(`Welcome back ${this.username}`)
         console.log(this)
    }
}

// user.welcomeMessage; //It is will not call the function. It will return the function definition. To call the function, we need to use parentheses after the function name.
// console.log(user.welcomeMessage()) //It will call the function and return the welcome message.

// user.username = "John Kumar" //It will change the value of username property in user object.
// console.log(user.welcomeMessage()) //It will call the function and return the welcome message with updated username property value. 

// console.log(this) //It will print the global object in node.js environment. In browser environment, it will print the window object.

// function myFunction(){
//     console.log(this) //It will print the global object in node.js environment. In browser environment, it will print the window object.
// }
// myFunction() 

//########################################################################################
// ############### Declaration of function using arrow function syntax. 
// const chai = () => {
//     let username = "Sunny"
//     console.log(this) //It will print the global object in node.js environment. In browser environment, it will print the window object.
// }
// chai() //It will call the function and return the welcome message.


const addTwo = (num1, num2) =>{  // Explicit return
    return num1 + num2;
}
console.log("Addition : ", addTwo(5,15))

const addTwo2 = (num1,num2) => (num1 + num2)  // Implecite return. We have not used {} curly braces hence no need to write return keyword.

const userNamereturn = (num1, num2) => ({username : "sunny"}) //return object
console.log("UserNameReturn : ", userNamereturn(1,2))