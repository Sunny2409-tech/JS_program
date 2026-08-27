const marvel_heros = ["Iron Man", "Captain America", "Thor"];
const dc_heros = ["Batman", "Superman", "Wonder Woman"];

// marvel_heros.push(dc_heros) // add dc_heros array at the end of marvel_heros array
// console.log("marvel_heros after push:",marvel_heros) 
// console.log("marvel_heros length after push:",marvel_heros.length);
// console.log("print heroes from new marvel_heros array after push operation: ",marvel_heros[3][0]) // print heroes from new marvel_heros array after push operation;
//o/p  
/*
marvel_heros after push: [
  'Iron Man','Captain America',
  'Thor',
  [ 'Batman', 'Superman', 'Wonder Woman' ]
] 
  It created a nested array at the end of marvel_heros array. So, length of marvel_heros array is 4 after push operation.
    It is not correct way to merge two arrays. It is better to use concat() method to merge two arrays.
  */

//Correct way to merge two arrays is to use concat() method
const all_heros = marvel_heros.concat(dc_heros) // merge two arrays using concat() method
console.log("all_heros after concat:",all_heros) 
console.log("all_heros length after concat:",all_heros.length);
/*
o/p
all_heros after concat: [
  'Iron Man',
  'Captain America',
  'Thor',
  'Batman',
  'Superman',
  'Wonder Woman'
]
  all_heros length after concat: 6
  */

//Another way to merge two arrays is to use spread operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15];
const arr4 = [...arr1, ...arr2, ...arr3] // merge two arrays using spread operator
console.log("arr4 after spread operator:",arr4)
console.log("arr4 length after spread operator:",arr4.length)
/*
o/p
arr4 after spread operator: [
  1,  2,  3,  4,  5,
  6,  7,  8,  9, 10,
 11, 12, 13, 14, 15
]   
 */

const another_arr = [1,2,3 ,[4,5],[6,7,[8,9]]]
console.log("another_arr:",another_arr)
console.log("another_arr flat array:",another_arr.flat()) // flat() method flattens the array one level deep
/*o/p
another_arr: [ 1, 2, 3, [ 4, 5 ], [ 6, 7, [ 8, 9 ] ] ]
another_arr flat array: [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]   
*/
// console.log("another_arr flat array with depth 2:",another_arr.flat(2)) // flat() method flattens the array two levels deep
// console.log("another_arr flat array with depth 3:",another_arr.flat(Infinity)) // flat() method flattens the array to Infinity levels deep


console.log(Array.isArray("Sunny")) // false
console.log(Array.isArray([1,2,3])) // true
console.log(Array.isArray({name:"Sunny"})) // false

console.log(Array.from("Sunny")) // ['S', 'u', 'n', 'n', 'y']
console.log(Array.from({name:"Sunny"})) // []

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]
