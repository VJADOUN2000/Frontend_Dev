// Some basic scope questions

let ab =10;
{
    let ab = 20;
    console.log("inside:", ab)
}

console.log(ab);

//Data Types + Type System

// primitives - aise value jisko copy karne par tumhe ek real copy mil jaaye
// string, number, boolean, null, undefined, symbol, bigInt

//let a =45;


//non-primitives (reference) -> inko copy karne par reference value milte hai naki real value
// array, objects functions

//[], {}, ()

//1 String

// "" -> double quotes, '' -> single quotes, `` -> backticks

//2. Number 

// let a = 12 , 15.56


//3. Boolean -> True or False


let a = true;
let b= `True`;
console.log

//Null -> it is like you given it null so in future you will give it a real value 

let asd=null;
console.log(asd)

//Undefined -> it is given by js engine 
// let num;

// Symbol -> Unique immutable value


//future mei hum use karegay labraries, usme hoti hai kuch fields or ab hum be kabhi similar fields bana dede hai or vo fields libraries ki original fileds ko rplace kar deti hai

//let u1 = Symbol("uid");

//let u2 = Symbol("uid");

let obj ={
    uid: 12,
    Name: 'Vikrant',
    age: 24,
    email: 'jadounvikrant@gmail.com'
}

let u1 = Symbol("uid");
 obj[u1] = 45;

// BigInt

let num =9007199254740991n

num + 7n // only add bigint with bigint

// dynamic typing -> js mei static typing nahi hai, Dynamic typing hai matlab app data ko chnage kar sakte hu 

//Example

let data = "Vikrant";
data = 24;
data = true;
data= []
data = Symbol("yes")
data= [45,87,98]








