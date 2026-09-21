let a = [12,4,53,2169,5451,63]

let obj = {
    name: "Vikrant",
    age: 24,
    city: "New Delhi",
    pincode: 110092
}

console.log(obj.name)   // can also ude ["name"];

let aa = "city"
console.log(obj[aa]);  // by using [] brakets aa can change aa to "city" vale


//==============Nesting and deep access================>

const user ={                 // Nesting in object
    name: "vikrant",
    address: {
        city: "New Delhi",
        pin: 110092,
        location: {
            lat: 45.2,
            lng: 58.9,
        }
    }
}


console.log(user.address.location.lat)  // deep access

let {lat,lng} = user.address.location;   // use variable to access value in object and deep access too.


//<======================simple obj sample  for For loop-in obj======================>

let obj1 ={
    name: "VJ",
    age: 25,
    location: "Delhi"
}

for(let key in obj1){
    console.log(key, obj1[key]);
}

// ============Object.keys==================> It used used to put all keys in array format

let obj2={
    name: "Testing",
    age: 45,
    location: "unknown"
}

console.log(Object.keys(obj2))

//==========Object.entries============> make array of array of object

let obj3={
    name: "Testing2",
    age: 60,
    location: "known"
}

console.log(Object.entries(obj3))

// spread operator in object

let obj4 ={...obj3}

console.log(obj4)

//a sloe can use assign to copy object (samw as spread operator)

let obj5 = Object.assign({}, obj1)  // we can also add or add new value by putting value in {} inside this 


console.log(obj5)

//Deep clone


let obj6={
    name: "Testing2",
    age: 60,
    location: "known",
    addresses:{
        city: "Delhi"
    }
}


//let obj7 = {...obj6}

//obj7.address.city = "Indore";   // it changes city name for both obj7 and obj6
let obj7 = JSON.parse(JSON.stringify(obj6)) // it will copy all obj value not reference in case of nested objects


console.log(obj7)
console.log(obj6)

//optional chaining

console.log(obj6?.address?.city)  //=> it will check if there is address or city in object and if not don't give error message or just give undefined

// computed propertites 

let name ="admin"


let obj9={
    name: "Testing2",
    age: 60,
    location: "known",
    [name]: "Vikrant Singh",  // add key of value of variable and then we add or define its value in object
}

console.log(obj9)



