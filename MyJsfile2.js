// // globalscope || localscope
// var b = 10

// function a(){

//     return function c(){
//         var d = 100

//         console.log("inside function",b)

//     }
//     // c()
//     // console.log("inside function",d)

// }

// a()

// console.log()




// function localScopeExample() {
//     let localVar = "I'm a local variable";
//     console.log(localVar); 
// }

// localScopeExample();  
// console.log(localVar);




// function outer() {
//     let outerVar = "I'm outside!";
//     function inner() {
//         console.log(outerVar);
//     }
//     return inner;
// }

// const innerFunc = outer();
// innerFunc();

// outer()()


// console.log(a);
// var a = 50;
// console.log(a);

// var b = 10;

// function example() {
//     console.log(b);
//     var b = 20;
//     console.log(b);

// }

// example();


// function outerFunction() {
//     let x = "outer";

//     function innerFunction() {
//         let x = "inner";
//         console.log(x);
//     }

//     innerFunction();
//     console.log(x);
// }

// outerFunction();


// let num = 1;

// function outer() {
//     let num = 2;

//     function inner() {
//         console.log(num);
//     }

//     return inner;
// }

// const func = outer();
// func();

// function shadowExample(param) {
//     var param = 20; 
//     console.log(param);
// }

// shadowExample(10);


// for (var i = 0; i < 2; i++) {
//     for (var i = 0; i < 3; i++) {
//         console.log(i);
//     }
// }

// function logValues(a, b = a + 10) {
//     console.log(a, b);
// }

// logValues(5,10);

// function greet(name="chandu"){
//     console.log(name)
// }

// greet("ravi")


