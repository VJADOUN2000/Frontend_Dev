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

// it make a copy of orginal array // or change in parent array

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
