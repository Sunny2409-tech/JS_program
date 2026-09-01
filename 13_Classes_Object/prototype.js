let myName = "hitesh     "

console.log(myName.length)   //o/P - 11
//we can remove extra space by trim() method but if we have lots of variable then in that case unnessarity call trim() each time.
//Hence to fix this we can create our own custom function like below.


let heroPower = {
    thor : "Hammer",
    spiderman : "spidy",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

let myHeros = ["thor", "SpiderMan"]

//Creating one method hitesh in Object so that it can be access by any type of object
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all Objects`);
}

Array.prototype.heyhitesh = function(){
    console.log(`Hitesh says hello`);
    
}

heroPower.hitesh();   // you can see a method created inside Object is accessible from heropower as well.
myHeros.hitesh();
myHeros.heyhitesh();
// heroPower.heyhitesh();  //Error :- heroPower.heyhitesh is not a function because heyhitesh is created inside Array not in Object


//inheritance
const user ={
    name : "chai",
    email : "chai@gmail.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "js assignment",
    fullTime : true,
    __proto__ : teachingSupport      //This old way of inheriting all the properties of teachingsupport in TASupport.It effectively changes the prototype too, but __proto__ is generally not recommended for normal code.
}

//modern sytax to inherit is 
Object.setPrototypeOf(teachingSupport, teacher)//
/*
Object.setPrototypeOf() is used to change the prototype of an existing object.
    Object.setPrototypeOf(object, prototype);
    object → the object whose prototype you want to change
    prototype → the new prototype object (or null)

Ex : 
const person = {
    greet() {
        console.log("Hello!");
    }
};

const student = {
    name: "Sunny"
};

Object.setPrototypeOf(student, person);
student.greet();

*/

let anotherUserName = "chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength();  //Not it is trimed using custom method.
"hitesh    ".trueLength();
"chai".trueLength();