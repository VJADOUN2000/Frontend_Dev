// Arithmetic, comparsion, logical, assignment, unary, ternary

// Arithmetic -> +, -, /, *, **

//comparsion => ==, ===, !=, !!=,<=, >= 

console.log(23==[23]) // gives true as it does not check data types
console.log(24===[24]) // gives false 

// != not strict
// !== strict comparsion

// assigment

let sd = 23;

sd+= 3;
sd/= 2;
sd%= 5;
sd%= 7;

console.log(sd);

//logical  

//&& || !

//to check nature of data !!34 => true 

//unary operator

// + - ! typeof ++ --

// to convert string number to number datatype use like +"89" => become 89

//=======ternary operator=====================

// ?:


// Condition ? true wala oce: flase wala code

console.log(23>22?console.log("True"):console.log("False"))


// typeof and instanceof

let arr = 98

console.log(arr instanceof Number);

//Note : instanceof only works with reference value not on primitive datatypes

//================practice questions

let a1= 45;
let a2= 87;

if(a1<50 && a2 >74){
    console.log("True");
}  else{
    console.log("False")
}

//Q2

let b1=0;

if(b1){
    console.log("Truthy")
} else{
    console.log("Falsy");
}

//Q3

let score =6;

let grade = score>=90? "A": score>= 75? "B": score>=60? "C": "Fails";

console.log(grade);