// Variable declerations
// var we can redeclare and also re-assign the values any number of times
// let - we cannot re declare but we can re-assign the values
// const - we cannot re declare and also re assign the values

// var myName = "chandu"
// declaration
// assignment =
// const myName = "ravi"
// myName = "ravi"
// myName = "ravi"
// myName = "haseena"

// DataTypes - string, Number, Boolean, Null, Undefined,Object,array

// var myName =
//   "chandu sdifusjop sodifjsoidjf sidjfsd fjoisdjfsdjfolsdjfojo psjdf";

// var age = 29;

// var myBool = false;
// var a = 10;
// var b = 15;
// let sex = "male";
// var sum;
// var address = "aosdhasdj";

// object keys are always strings does not have any reference value we can give references

// var address = {
//   HouseNumebr: "16-134",
//   city: "khammam",
//   country: "india",
// };

// var chanduObject = {
//   name: "chandu",
//   age: 29,
//   sex: sex,
//   city: "hyderabad",
//   address: {
//     HouseNumebr: "16-134",
//     city: "khammam",
//     country: {
//       code: "IN",
//       name: "India",
//     },
//   },
//   citiesVisited:["hyd","chennai","blore","delhi"],
//   isMarried:true

// };

// chanduObject.phoneNumber = 9948084847;

// chanduObject.name = "ravi";

// console.log(chanduObject);

// Operators

// / - division
// % - modules

// 11/2 = 5
// reminder = 1

// comparision ==,===,!=,!==,<,>,<=,>=

// == compares only value
// === compares value and also dataType


// let z =4
// let y = 5

// and, or 
// && , ||
// let cond1 = false
// let cond2 = false
// console.log(cond1 || cond2)

// Arrays
// let arr = [chanduObject,address,chanduObject.address.country]

// let arr2 = [  [1,2,3]  ,  [chanduObject,address]  ,  [7,8,9]  ]


//index    0,1,2,3,4
// indexing starts from zero to array.length-1
// let length = arr.length
// console.log(arr[0].)
// arr.pop()

// console.log(arr2[arr2.length-1][  arr2[  arr2.length-1  ].length-1  ])

// console.log(arr2[2][2])
// if
// else if
// else

let score = 85


if(score>90){
  console.log("A grade")
}
else if(score>80 && score<90){
  console.log("B grade")
}
else if(score>70 && score<80){
  console.log("B grade")
}
else if(score>60 && score<50){
  console.log("B grade")
}else{
  console.log("fail")
}




// switch case

let fruit = "apple"

switch(fruit){
case "apple":{
  console.log("apple is selected")
}
break;
case "banana":{
  console.log("banana is selected")
}
break;
default:{
  console.log(" nothing selected")
}
}




// if(age>18){
//   console.log("major")
// }
// else{
//   console.log("minor")
// }

// ternary Operator
// condition ? condition satisfies : else 
let age = 20
hasID = true


age > 18
  ? hasID
    ? console.log("you are a major and allowed inside")
    : console.log("You are not allowed")
  : console.log("I am minor");

