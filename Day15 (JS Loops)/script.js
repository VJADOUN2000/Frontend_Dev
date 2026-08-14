// repeat karne ko loops kahte hai

// for loops -(baap hai  loop ka like a sword), while loops, do-while

// kaha se jana hai -> kaha tak jana hai -> kaise jana hai
// for loop

for(let i=1;i<=10;i++){
    console.log(i)
}


// kaha se jana hai -> kab rukna hai -> kaise jana hai
// while loop

/*
start 
while(){
  change  
}*/ 

let i=1;
while(i<=32){
    console.log(i)
    i++;
}

// do while

let j=12;
do{
  console.log(j);
  j++
}
while(j<8);

// break and continue

for(let i=5;i<15;i++){
    
    if(i==7){
        continue; // we skip and move to next number 
    }
    console.log(i);
}

// practice question for loops

// Q1. Print number 1 to 10 

for (let a = 1;a<11;a++){
    console.log(a);
}

//Q2. Print 1 to 10 using while loop

let b=1;
while(b<11){
    console.log(b);
    b++;
}

//Q3. Print even number from 1 to 20 using for loop

for(let i=1;i<21;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Q4. Print Odd number from 1 to 15 using while loop

let c=1;
while(c<16){
    if(c%2==1){
       console.log(c);   
    }
    c++;
}

// Q5. Print table of 5 

for(let i=1;i<11;i++){
    console.log(`5 x ${i} = ${i*5}`);
}

// Q6. Sume from 1 to 100 using a loop

let sum =0;
for(let i =1;i<101;i++){
    sum =sum+i;
}

console.log(sum);

// Q7. Print number from 1 to 50 divisible by 3

for(let i=1;i<51;i++){
    if(i%3==0){
        console.log(i);
    }
}

//Q8. Take number from user and also tell for 1 to this number is even or odd

// const prompt = require("prompt-sync")();

// let num = prompt("enter any Number");
// let ai=1;
// while(ai<=num){
//     if(ai%2==0){
//         console.log(`${ai} is Even`);
//     }
//     else{
//         console.log(`${ai} is Odd`);
//     }
//     ai++;
// }

//Q9. Count how many num bers b/w 1 to 100 are divisible by 3 and 5

let q9 =1;
let count =0;
while(q9<101){
    if(q9%3 ==0 && q9%5==0){
        console.log(`Number ${q9} is divisible by both 3 and 5`)
        count++;
    }
    q9++;
}

console.log(count)

// ================Break and continue questions ===========//

// Q1 print n0. till first multiple of 13

for(let i =1;i<101;i++){
    if(i%13==0){
        break;
    }
    console.log(i);
}
