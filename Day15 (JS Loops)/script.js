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
while(i<16){
    if(i%2==0){
        //continue;
    }
    else{
        console.log(c);
    }
}