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