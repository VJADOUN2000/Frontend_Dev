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

// hoist2();

// let hoist2= function(){
//     console.log("This will not work in hoisting")
// }

//===================Practice Questions==========================>

//Q1 function declaration vs function expression difference in terms of hoisting

// decalaration can be hoisted but not expression



//Q2. output of code the code

greet();

function greet(){
    console.log("Greet!");
}

//Q3. Make this function a fat arrow function


function multiply(a,b){
     return a * b;
}

// let multiply =(a,b)=>{   // let name = ()=>{}
//     return a * b;
// }



//Q4. identify perameter and Arguments

function pera(value){
    console.log(value);
}

pera("Vikrant Singh");



//Q5. sSimple to detect no. of perameter and argument Skip this

//Q6. Guess the output

function name(val="Guest"){
    console.log(`Hi ${val}`)
}

name();


//Q7.What is ...(Rest operator in JS)


function rest(...chacha){
    console.log(chacha)
}

rest(4,89,65,12,4,56,1,65,4,41)


//Q8. use the rest parameter to accept ant number of scores and return the total

function total(...score){
    let total = 0
    for(let i=0;i<score.length;i++){
        total =total+score[i];
    }

    console.log(total);
}

total(45,8,4,45,121,65,6,2,213,15,45);

//Q9. fix that function with early return

// function checkAge(age){
//     if(age>18){
//         console.log("Allowed");
//     }
//     else{
//         console.log("Not allowed");
//     }
// }

// Early return version of above function

function checkAge(age){
    if(age>18) return "Allowed to Vote";
    return "Not allowed to vote";
    }
console.log(checkAge(27));

//Q10. output of the function

function f(){
    return;
}

console.log(f());  //======> will return undefined 

//Q11. what does it mean when we say "functions are first-class citizens"


// Simple meaning is function can be treated as a value



//Q12. Can you assign a function to a variable abd then call it? Show how.


let val1 = function(){
    console.log("This is function usng val1")
}

val1()

//Q13. Pass a function into another function and execute it inside

// function sup(){
//     return function(){
//         console.log("This is function inside a function")
//     }
// }

// sup()();

function fun1(val){
    val();
}

fun1(function(){
    console.log("This is function in another function")
})


// Q14. what is Higher order function?

// If a function returns another function or take another function as perameter then it is HOF

function val2(val){
    val()
}

val2(function(){
    console.log("This is HOF Function");
})


//Q15 which is HOF in this code

// [45,84,36].map(function(x){   ///==========> MAp is the HOF 
//     return x * 2;
// })


//Q16 now on pure and impure function

let tot =0;

function addtotot1(num){
    tot += num;          //===============> this is impure as it is changing value of variable outside the function scope
}


//Q17. Convert the above function into pure function

let tot1 =0;

function addtotot(num){
    let newTotal = tot1;
    newTotal += num;          //===============> Now we make this impure function to pure function in js
}

addtotot(45);


//Q18. What is a closure and How it is created

// Whena a function return another function and it also use variable from parent or outer function then it is closure


function clos(){
    let b= 45
    return function(){
        console.log(b)
    }
}

clos()();


//Q20 Convert normal function into IIFE

(function Infinity(){
    console.log("Initializated");
})();   // done


//21 What is the use of IIFE ? Name any one real application

// It is used in making private variable and which cannot be accessable in code 

//Q22. What wiil be the output and why?

greet();

var greet= function(){
    console.log("Hi")
}

// This above code will throw error like greet is not a function

// But for program 

greet();

function greet(){
    console.log("Hi")
}

//=========================Some good practice Questions================>

//Q1. Create a BMI calculator 

function BMI(weight,height){
    return weight/(height*height)
}

console.log(BMI(71,2.1).toFixed(2))


//Q2. Create a reusuable discount calculator (HOF)

function Discount(amount, discount){
    let dis = amount * (discount/100);
        return function(){
            console.log(amount- dis)
        }
}


Discount(100, 25)();


function DiscountCalculator(discount){
    return function(price){
        return price -price * (discount/100)
    }
}

let discount = DiscountCalculator(50)

console.log(discount(200));


//similar example but with Counter

function Counter(){
    let count =0;
    return function(){
        count++;
        return count;
    }
}

let c =Counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());


// Create a pure function to transform a value


function double(val){
    return val*2;
}

console.log(double(75))

// use IIFE to isolate variable

(function(){
    const password ="Secret key"
    console.log(password)
})();


console.log(password);
''

