const promiseOne = new Promise(function(resolve, reject){
    //Do Async task, DB call, crptography, network call
    setTimeout(()=>{
        console.log("Async Task is completed");
        resolve();
    },1000);
});

promiseOne.then(function (){
    console.log("Promise Resolve is consumed");
    
});

//2nd Way to write
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(()=>{
    console.log("Async 2 resolved")
})

//To pass value in resolve
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username:"Chai", email : "chai@example.com"})  //passing object in resolve
    }, 1000)
}).then((user)=>{      ///.then method called once it is resolved
    console.log("UserData after resolve : ",user);
})

//To pass error
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Sunny", password:"12345"})
        }else{
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})

//Below code fail to return the value, If we want to get data then we have to do further chaining
// const userName = promiseFour.then((user)=>{
//     console.log("User Object 4 : ",user);
//     return user.userName;
// })
// console.log("UserName 4 : ",userName);

//Further chaining to get the data
promiseFour.then((userObj)=>{
    console.log("4 User Obj Details : ",userObj)
    return userObj.username;
}).then((userName)=>{
    console.log("4 USERNAME : ",userName);
}).catch((error)=>{
    console.log("ERROR : ",error)
}).finally(()=>{
    console.log(" 5 - The promise is either resolved or rejected ");
})

//Using async await
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"JavaScript", password: "12345"})
        }else{
            reject("5 - Error : Error Occured in JavaScript")
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log("5 - Response : ",response);
        console.log("5 - USERNAME : ",response.username);
        
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// #### Async await #####
console.log("======== Async await =========")
// async function getAllUsers(){
//     try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/users")   
//     //It is network hence it will take some time to get the response so we have to use await which means it will wait for sometime.
    
//     // console.log(response)
//         const data = await response.json(); //It take sometime to convert string to json therefore we have to use await here.
//         console.log("Data : ",data)

//     } catch (error) {
//         console.log("Error : Get All Users");
        
//     }
// }

// getAllUsers();

//Above same code using fetch and then method

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log("(6) Data : ",data)
})
.catch((error)=>{
    console.log("ERROR : (6) Error while fetching");
    
})

