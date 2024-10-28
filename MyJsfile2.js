
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
let nums = [1,2,3,4,5,6,7,8,9]



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
let filteredNumberSquares = nums
  .filter((element) => {
    return element > 5;
  })
  .map((ele) => {
    return ele * ele;
  });
//   Prototype
console.log(filteredNumberSquares)