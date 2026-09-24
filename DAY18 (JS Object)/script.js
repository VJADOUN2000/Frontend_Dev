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

// ========================Practice=============================>

//Q1. Create object for a student with name, age and isEnrolled

let student ={
    name: "Vikrant Singh",
    age: 25,
    isEnrolled: false
}

console.log(student)

//Q2.Try if obkect key can be boolean or number  --> It is true and can be true

let obj41 ={
    true: "test",
    65: 456
}

console.log(obj41[true])

// Q3. Acess the value of "First_Name" from given object

let obj46 ={
    "First_Nmae": "VJ"
}

console.log(obj46["First_Nmae"])

//Q4 Given dynamic key let key ="age" . How will you access user[key]?

let key = "age";

let obj47 ={
    age : 25
}

console.log(obj47[key])  // It will chage key to age as key is variable

// Q Destructure the city and lat from the object

let locations = {
    city: "Delhi",
    coordinates: {
        lang: 45.26,
        lat: 98.544
    }
}

let {city} =locations;
let {lang} = locations.coordinates;

//Q Destructure the key "first-name" as a variable called firstName

const user12 ={
    "first-Name": "Abhi"
}

let {"first-Name": FirstName} = user12;

// Use for-in loop in the object


let obj78 ={
    key1: "Testing1",
    key2: "Testing2",
    key3: "Testing3"
}

for(let key in obj78){
    console.log(key, obj78[key])  // we console all key value
}

//  Use object.entries to print all key value pair in given object

// Tittle: JavaScript;
// duration: 4 Weeks

const course ={
    title: "Javascript",
    duration: "4 weeks"
}

Object.entries(course).forEach(function(val){
    console.log(val[0] + " : " +"val[1]")
})


const obj48 = {a:45, g:78}

const copy ={...obj48};  // will copy value of obj48


// Q Rewrite this with optional chaining

const person = {}

console.log(person?.info?.name);  // we not give error if not found but give undefined

//Q use variable to dynamically assign a property

let key4 ="role";

const model ={
    name: "Vikrant",
    [key4]: "admin"   // will add this in object
}

console.log(model)