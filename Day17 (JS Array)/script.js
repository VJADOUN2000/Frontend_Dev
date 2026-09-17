// STARTING OF ARRAY IN JS

let array = [45,'sdsd', 45.56, true, null]


let array1 = new Array();  // => Another way of making array

console.log(array)
console.log(typeof(array))

let arr5 = [45,85,6,45,121,48]

//arr[5]= 78;


// how to push ar add list in array

arr5.push(4000);  // Add value in the end of array

console.log(arr5)

arr5.pop();

console.log(arr5);  // Remove last value in array


arr5.unshift("Vikrant");  // unshift adds value in the starting of array
console.log(arr5);

arr5.shift();
console.log(arr5)  // shift-> Remove first value in the array


arr5.splice(3,2);  //=> remove value from middle or from certain index mention and like use two value ,i.e, starting index or from where to start remove value and how many value to remove /// Also it make changes in orginal array
console.log(arr5);

//============Slice=======>

let newarr =arr5.slice(0,4) // starting index of array to ending index of array to remove and ending no. is not included
console.log(newarr);

// it make a copy of orginal array // or make no change in parent array

arr5.reverse();
console.log(arr5)

// Sort => Used to sort array in ascending or decending order

let sort= arr5.sort(function(a,b){
    return a-b;   // Will sort in ascending order
    // reurn b-a // will sort in decending order
})

console.log(sort)



// ==============ForEach ================>
arr5.forEach(function(val){
    console.log(val*2);  //will run for each value in the array  // change in original array
})

//====================Map=================>

// map sirf jab use karna hai jab apko new array banana hu pichle data kay basis par

// map dikhte he ek blank array bana leya karo

let newarr1 =arr5.map(function(val){
    if(val>10) return val;  // if no value then it will show undefined
})

console.log(newarr1);

// when to us eeamp => we we have to create new array from an array and it holds the value of value also then map is used.


//========Filter===============>

let arr7 = [4,65,721,4,5,6,98,2,1,54,5];

let newaar7= arr7.filter(function(val){
    if(val>4) return true;
})

console.log(newaar7);

//==========Reduce in Array============>

let arr8= [45,45,65,21,45,2032,5,15];

let newarr8 = arr8.reduce(function(acculmulator,val){
    return acculmulator+ val
},0)

console.log(newarr8);

//================Find in Array=================>

let arrf =[45,75,65,65,15,4,456,14,87,57,6,8]

let newarrf =arrf.find(function(val){
    return val ==400;  // will find the val is there if yes then return the first value in array  but if value is not present in array then it return undefined
})

console.log(newarrf);

// ================Some in array==================>

let marks =[45,98,45,33,65,75,90]

let any =marks.some(function(val){
    return val>85  // if return true if any value in array is correct or satisfying the condition
})

console.log(any);

// ==================Every in array===============>

let marks1 =[45,35,78,88,49,65]

let every = marks1.every(function(val){
    return val>39   // will reture true only when all value is satisfying or meet the condition in array
})

console.log(every);


// =============Destructuring in Array==================>

let arr =[45,6,244,98,45,35,45]

let [s,b, , , ,c] = arr; // it will save the value in variable from the arr

// ==============spread in array =======================>

let arr4 =[45,8,6,12,8,6,2661,56]

let arr56= [...arr4];  // will copy all value and make new value in new array


// ==================Practice Questions ======================>

//Q1. create array of fruit and print the second fruit value

let fruit =['apple','guava','banana']

console.log(fruit[1]);

//Q2. add "Mango" at the end and "pinapple" at the satart of this array

fruit.push('Mango');
fruit.unshift('Pineapple');

console.log(fruit);

//Q3. Replace banana with 'Kiwi' in the above array

idx = fruit.indexOf('banana')
fruit[idx] ='Kiwi'

console.log(fruit)

// Q4. what is difference between .push() and unshift()?

//.push() add the value at the end of array while .unshift() add the value at the beginning of the array

// Q5. Remove the last element from this array using method

let numbers = [1,2,3,4]

numbers.splice(3,1);  // will take 3 as index and remove 1 value from the array
console.log(numbers)  

//Q6. Add Purple and Red in this array at index 1

let colors = ["Yellow", "Orange"]

colors.splice(1,0,"Red" , "Blue")

console.log(colors);

//Q7. Extract only 3 middle element in array

let num = [5,3,9,7,5,4,2]

let newnum = num.slice(2,5);

console.log(newnum);

//