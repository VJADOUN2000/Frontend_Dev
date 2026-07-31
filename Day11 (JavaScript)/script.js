// console.log("Starting JS!")

// // words vs keyword -> words which are reserved and can not be used as variable

// //variables and declaration 

// // var, let, const


// var ab = 12
// var ab = 56 // show no error weven a is already declare and initization

// //===================================//

// let b =23;
// //let b =28; //-> Give SyntaxError as b is already declared

// const discount = 32 // => can not change


// // =====Scope (block, functional, global)

// function abcd(){
//     if(true){
//         var a  =45;   // Functional scope is like it is accessable to nearest parent (var is accessable) in this case is function abcd()
//     }
// }

// //Temporal Dead Zone


// // console.log(a)
// // let a =45;

// //================================================//

// //hoisting impact per type

// //hoisting -> ek variable kab banta hai to vo do hisso mei tu jaata hai and uska declare wala part upar chala jaata hai aur inititlization wala neeche rah jaata hai

// // Example var name = "Vikrant";

// console.log(name)

// var name = 45;

// console.log(h1)
// let h1 = 12;

// var -> hoisting -> undefned
//let -> hoisting -> X
//const -> hoisting -> X


// common Confusion

console.log(name);

var name = 45;