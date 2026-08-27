const myArr1 = [1, 2, 3, 4, 5];
const myHeros = ["Shaktimaan", "Batman", "Superman"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr1[0])

//Array methods
myArr1.push(6) // add element at the end of array
console.log(myArr1)
myArr1.pop() // remove last element from array
console.log(myArr1)

myArr1.unshift(9) // add element at the start of array
console.log(myArr1)
myArr1.shift() // remove first element from array
console.log(myArr1)

console.log(myArr1.includes(3))
console.log(myArr1.includes(12))

const newArr = myArr1.join()
console.log("Joined array:",newArr)
console.log(typeof newArr)

console.log("==== slice methods ====")
console.log("myArr1 before slice/splice:",myArr1)
const myArr3 = myArr1.slice(1,4) // slice(startIndex, endIndex) - endIndex is not included
console.log("myArr3 after slice:",myArr3)

console.log("==== splice methods ====")
console.log("myArr1 before slice/splice:",myArr1)
const myArr4 = myArr1.splice(1,3) // splice(startIndex, deleteCount) - endIndex is not included
console.log("myArr4 after splice:",myArr4) // myArr4 contains the deleted elements from myArr1
console.log("myArr1 after splice:",myArr1) // myArr1 is modified after splice operation


//###### forEach Loop ################
console.log("############ forEach Loop ################")
const coding = ["js", "Ruby", "Python", "Java", "CPP"]
//1st way
coding.forEach(function (value){
    console.log("Value is : "+value)
})

//2nd Way
coding.forEach((item) => {
    console.log("2nd Way : "+item)
})

function printMe(item){
    console.log("ITEM : ",item)
}
coding.forEach(printMe)  //Here we have to pass the refrence, we doesnot have to give the function with parameter

coding.forEach((item,index,arr) => {
    console.log(item, index, arr)
})

//
const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Ruby",
        languageFileName : "rb"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log("Language Name : "+item.languageName)
})

//####### Filter method ##########
const myNum = [1,2,3,4,5,6,7,8,9,10];
const newNum = myNum.filter((num)=> num >5)
console.log("New Num : ",newNum)

const newNum2 = myNum.filter((num)=>{
    return num >5
})
console.log("New Num 2 : ",newNum2)

//############ map method ############
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const myNew1 = myNumbers.map((num) => {return num + 10})
let myNew2 = myNumbers
            .map((num)=> num * 10)
            .map((numVal)=> numVal + 1)
            .filter((val)=> val> 40)
console.log("New Num 1 : ",myNew2)


// ########### reduce method ##############
/*syntax 
    array.reduce((accumulator, currentValue) => {
        // operation
        return accumulator;
    }, initialValue);
*/
console.log("########### REDUCE ##############")

let numbers = [1,2,3,4,5]
let initialValue = 0;
let sum1 = numbers.reduce((accumulator, currentVal)=> {
    console.log(`Accumulator : ${accumulator} , CurrentValue : ${currentVal} `)  
    return accumulator + currentVal
}, initialValue)
console.log("Sum 1 : "+sum1)

//In short we can write the above code as 
let sum2 = numbers.reduce((acc,curr)=> acc + curr, 0);   //It collect all value in accumulator once return acc + curr
console.log("Sum 2 : "+sum2)

//Find the maximum Number
const number2 = [10, 25, 5, 40, 15];
let maxNum = number2.reduce((max, curr)=> curr > max?curr:max, number2[0])
console.log("Max Number : "+maxNum)

//Count occurrences using reduce
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let countFruits = fruits.reduce((acc,fruit)=>{
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
},{})
console.log("Count Fruits : ",countFruits)

// Reduce with Object. Find total age
const users = [
    { name: "A", age: 20 },
    { name: "B", age: 25 },
    { name: "C", age: 30 }
];
let initialValue1 = 0;
let totalAge = users.reduce((acc, currObj)=>{
    return acc + currObj.age
}, initialValue1)
console.log("Total Age : "+totalAge)

// map()     → Transform
// filter()  → Select
// reduce()  → Combine

