function sayMyName(){
    console.log("S")
    console.log("U")
    console.log("N")
    console.log("N")
    console.log("Y")    
}

sayMyName() // calling the function sayMyName

function addTwoNumbers(num1, num2){
    return num1 + num2;
}
let result = addTwoNumbers(10, 20) // calling the function addTwoNumbers with arguments 10 and 20
console.log("Result : ", result)

function loginUserMessage(username){
    if(!username){  //This is equivalent to if(username === undefined) 
        console.log("Please enter a username")
        return
    }
    return `Welcome back ${username}`
}
console.log(loginUserMessage("Sunny"))
console.log(loginUserMessage()) // calling the function loginUserMessage without arguments

function calculateCartPrice(...price){
    return price;
}
console.log(calculateCartPrice(100, 200, 300, 400)) // calling the function calculateCartPrice with arguments 100, 200, 300 and 400


const user = {
    username: "Sunny",
    price: 100,
    isLoggedIn: true
}
function handleObject(anyObject){
    console.log(`Username :${anyObject.username}, Price : ${anyObject.price}, isLoggedIn : ${anyObject.isLoggedIn}`)
}
handleObject(user)
