//========================Function =============================>

// what why how 

//Example 

function dance(){
    console.log("Dance")
    console.log("Dance")
    console.log("Dance")
    console.log("Dance")
}

dance();

// Different types of function

let fnc = function(){
    console.log("Function using a variable!");
}

fnc()

// function declaration, expression and arrow functions

// function declaration :

function func1(){
    // declaration
}

// Function expression

let num = function(){
    // console.log("");
    // Function expression

}

//fat arrow function
let num1 = ()=>{
    console.log("Fat arrow function");
}

num1();

// =========arguments=======================>

function dance(name){
    console.log(`${name} is dancing`)
}

dance("horse");
dance(`Mouse`);
dance("Cheel");
dance("lakadbaggha");

function multipy(v1,v2){  // ---> Perameters
    console.log(v1 *v2)
}

multipy(56,65) //--> Arguments

// =============Default perameters===============>

// function add(a,b){ default is undefined
    function add(a=1,b=7){ // it will use this as default if no value is provided
   console.log(a+b); 
}


add(); // it will give NaN since undined +undined is not a number

//====================Rest parameters===============>

// jab arguments kai saare ho tu humein utne hi parameters bane padege. issey bachne ke liye, hum rest ka use karte hai ...

// agar ... function ke paramenter mein lage tu vo rest operator hai

// agar ... arrays or object mei lage tu spread operator  hai


function abcd(a,b,c,...val){
  console.log(val)

  console.log(typeof(val))
}

abcd(34,43,434,65,656,765,7657,657,567,6576,5435,43,32,4234,34);


// return matlab jaha se aaye ho wahi daal denge

function name(v1){
    return 45+ v1;
}


let val=name(65);
console.log(val)


// first class function -> functions ko values ki tarah treat kar sakte hai 

function f1(val){
 console.log(val());
}

f1(function (){
    return 45;
})


// Higher order function -> vo function jo ki return kare function or fir accept kare function as a perimeter is called HOF


function f3(){
    return function(){
        console.log("This is HOF")
    }
}

f3()();


// Practice questions

//Function passed as an argument
//Create a function calculate that takes two numbers and a function as arguments.



// function declaration can be hoisted but function expression cannot be hoisted 

//pure vs impure Functions

//Aisa function jo baahar ki values ko na badle wo pure function

let a1= 4;

function test(){
    console.log(a1)
}

//Aisa function jo baahar kai values ko badle wo hai impure function

function addition(){
    a++;
}

// closures -> ek function jo return kare ek aur function aur return function use karega parent function ka koi variable

function abdf(){
    let a=75
    return function (){
        console.log(a);
    }
}


abdf()();

//=================lexical scoping========================>

// we can use variable with the limit/ scope / or function we made

function qwe(){
    let a =78;
        function ret(){
            let b =49;  //=====> we can access b after initization or in function ret();
            function hjk(){
                let c=95;  //=====> we can access c in function hjk only not before or after closing of this function.
            }
    }
}


/// IIFE (Immeiately Invoked function Expression)

(function(){
    console.log("This is IIFE is working");
})();



// Hoisting for function declaration and expression 

hoist();
function hoist(){
    console.log("This is function declaration and work in hoisting")
}

hoist2();

let hoist2= function(){
    console.log("This will not work in hoisting")
}