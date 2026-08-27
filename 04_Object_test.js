// const tinderUser = new Object();  //This is singleton object. We can create an object using new Object() 

const tinderUser = {} //This is object literal syntax. We can create an object using object literal syntax. This is the most common way to create an object in JavaScript.
tinderUser.id = "123";
tinderUser.name = "Sunny";
tinderUser.isLoggedIn = false;

// console.log("tinderUser : ", tinderUser)
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sunny",
            lastName: "Kumar"
        }
    }
}
console.log("regularUser first name : ", regularUser.fullName?.userFullName.firstName) //this will print the first name of the user

//merging two objects 
console.log("==== combining two objects ====")

const obj1 = {1: "A", 2: "B"}
const obj2 = {C: "3", 4: "D"}
const obj3 = {obj1, obj2} //This is not required one. It will create object inside another object rather that merge
console.log("obj3 : ", obj3) //This will print the object inside another object rather that merge

//fix the above issue using Object.assign() method. It will merge two objects into one object.
const obj4 = Object.assign(obj1, obj2) 
console.log("obj4 : ", obj4)
const obj5 = Object.assign({}, obj1, obj2)  //{} -> target object, obj1 -> source object 1, obj2 -> source object 2. It will merge obj1 and obj2 into a new object.
console.log("obj5 : ", obj5) //This will print the merged object

//using spread operator to merge two objects. It will merge two objects into one object.
const obj6 = {...obj1, ...obj2} //It will merge obj1 and obj2 into a new object.
console.log("obj6 : ", obj6) //This will print the merged object

//To get all the key from an object, we can use Object.keys() method. It will return an array of keys from the object.
console.log("tinderUser object :", tinderUser)
const tinerUserKeys = Object.keys(tinderUser) //It will return an array of keys from the tinderUser object.
console.log("tinderUser keys : ", tinerUserKeys) //This will print the array of keys from the tinderUser object.
const tinerUserValues = Object.values(tinderUser) //It will return an array of values from the tinderUser object.
console.log("tinderUser values : ", tinerUserValues) //This will print the array of values from the tinderUser object.

//entries() method returns an array of key-value pairs from the object. Each key-value pair is represented as an array of two elements, where the first element is the key and the second element is the value.
const tinerUserEntries = Object.entries(tinderUser) //It will return an array of key-value pairs from the tinderUser object.
console.log("tinderUser entries : ", tinerUserEntries) //This will print the array of key-value pairs from the tinderUser object.   

console.log("Check hasOwnProperty : "+tinderUser.hasOwnProperty("id")) //It will return true if the object has the property, otherwise false.
console.log("Check hasOwnProperty : "+tinderUser.hasOwnProperty("isLogg")) //It will return true if the object has the property, otherwise false.


// ### Object destructuring
const course = {
    courseName: "JavaScript",
    price: 299,
    courseInstructor: "Sunny",
    courseDuration: "3 months"
}

console.log("course Instructor : ", course.courseInstructor)
//Here every time we need to write course.courseInstructor to get the value of courseInstructor. To avoid this, we can use object destructuring. It will extract the values from the object and assign them to variables with the same name as the keys in the object.
const {courseName, price, courseInstructor, courseDuration} = course //It will extract the values from the course object and assign them to variables with the same name as the keys in the object.
console.log("course Instructor : ", courseInstructor) //Now we can access the value of courseInstructor directly without using course.courseInstructor.

//We can also rename the variables while destructuring the object. We can use colon (:) to rename the variables.
const {courseName: cName, price: cPrice, courseInstructor: cInstructor, courseDuration: cDuration} = course //It will extract the values from the course object and assign them to variables with the new names.
console.log("course Instructor : ", cInstructor) //Now we can access the value of courseInstructor directly without using course.courseInstructor.  
