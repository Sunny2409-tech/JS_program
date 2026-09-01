const user = {
    userName: "Sunny",
    loginCount: 8,
    isSignedIn: true,
    getUserDetail : function(){
        console.log(`UserName is ${this.userName}`)
        console.log(`Display User Object : ${this}`)
    }
}

console.log("1) UserName : ",user.userName)
console.log("2) User Details : ",user.getUserDetail());

console.log("==================================");
function User(username, logincount, isLoggedin){
    this.username = username
    this.logincount = logincount
    this.isLoggedin = isLoggedin
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this;
}

// const userOne = User("kumar", 12,true)  //Here userTwo will override userOne. But it not required case. As it always override it. so use new keyword always
//const userTwo = User("Sinha", 10,true)
// console.log(userOne)

const userOne = new  User("kumar", 12,true)
const usertwo = new  User("Sinha", 10,false)
console.log(userOne)
console.log("Constructor ref : ",userOne.constructor)  //Return constructor

