
// console.log(n)
// console.log(square)
// var n = 4
// function square(num){
//     ans = num*num
//     return ans
// }
// var m = 10
// square(n) 

// Higher-order-functions

// Higher-Order Functions (HOFs) are functions that either take other functions as arguments or return functions as their result. 

// function greet(greeting){
//     return function(name){
        
//         return `${greeting},${name}`
//     }
// }

// const sayHello = greet("hello")
// // function greet(hello){
// //     return function(name){
        
// //         return `${hello},${name}`
// //     }
// // }
// // ƒ (name){
        
// //     return `hello,${name}`
// // }
// const greetchandu = sayHello("chandu")

// console.log(greet("hello")("chandu"))


// function greet(greet){
//     return function(name1){
//         return function(name2){
//             return `${greet} ${name1} ,${name2}`
//         }
//     }
// }

// // // greet("hello")("chandu")("ravi")
// console.log(greet("hello")("chandu")("ravi"))

// // addTwoNumebers(5) = function(2){
// //     return 5 + 2
// // }
// function greet(name="default name"){

//   console.log("Hello",name,"  welcome to JS and react")

// }

// function sayHello(callbackfunction){
//   const name = "chandu"
//   callbackfunction(name)
// }
// sayHello(greet)

// Map() filter()  reduce()
// map is a method creates a new array populated with the results of calling a provided function on every element in the calling array. 
// It does not modify the original array.
// let nums = [1,2,3,4,5,6,7,8,9]



// let cubes = nums.map((num)=>{ return num*num*num})

// console.log(square,cubes) //[1, 4, 9, 16, 25, 36]

// let squares=[]
// for(let i=0;i<nums.length;i++){
//     squares.push(nums[i]*nums[i])
// }

// let square = nums.map(function(ele){
//     return ele+10;
//   });

// console.log(squares)

// Filter
// the filter method creates a new array containing all elements of the calling array that pass a specified test implemented by a provided function. 
// It does not modify the original array.

// let filteredNumber = nums.filter((element)=>{return element>5})

// let filtered=[]
// for(let i=0;i<nums.length;i++){
//     if(nums[i]>5){
//     filtered.push(nums[i])
// }
// }
// let filteredNumberSquares = nums
//   .filter((element) => {
//     return element > 5;
//   })
//   .map((ele) => {
//     return ele * ele;
//   });
// //   Prototype
// console.log(filteredNumberSquares)



// let nums = [1,2,3,4,5,6,7,8,9]
// let greaterNums = nums.map((element)=>{
//   if(element>5){
//     return element
//   }
// })

// let greaterNums2 = []

// nums.forEach((element)=>{ 
//   if(element>5){
//     greaterNums2.push(element)
//   }
// })

// console.log(greaterNums,greaterNums2)

// Reduce
// Array.reduce((accumulator,currentValue)=>{
//   // logic
// }, initialValue)
// let scores =  [75, 85, 95]
// sum = 0
// for(let i =0;i<scores.length;i++){
//   sum = sum+scores[i]
// }
// const sum = scores.reduce((acc,num)=>{
// return acc+num
// },0)

// let nums = [5,8,3,67,34,88,33,45,9,0,4,22,454,67,98,222]
// // min = 5
// let minimum = nums.reduce((a,b)=>{
// if(a<b){
//   return a
// }else{
//   return b
// }
// },nums[0])

// let maximum = nums.reduce((a,b)=>(a>b ? a : b ),nums[0])
// console.log(maximum)

// Given the array const students = [{ name: 'John', scores: [75, 85, 95] }, { name: 'Jane', scores: [95, 100, 90] }, { name: 'Jim', scores: [60, 70, 80] }], 
// create a new array of students who have an average score of 80 or above, including their names and average scores.

// const students = [
//   { name: "John", scores: [75, 85, 95] },
//   { name: "Jane", scores: [95, 100, 90] },
//   { name: "Jim", scores: [60, 70, 80] },
// ];

// const HighScorers = students.map((ele)=>( {
//   name:ele.name,
//   average:ele.scores.reduce((acc,cur)=>(acc+cur),0)/ele.scores.length
//   })
// ).filter(student=>student.average>80)

// console.log(HighScorers)



