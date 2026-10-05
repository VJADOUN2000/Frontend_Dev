// JS Dom Manipulation !

// html se element select karna
// text badalna
// html badalna
// css badalna
//attribute
// event listerners

// html se element select

// 1. document.getelementById()
// 2. document.queryselector()
//3. document.getelementsByClassName()

let a = document.getElementById("abcd") 
console.log(a)

// let ab = document.querySelector("h1");  //it will slect first element of H1
// console.log(ab.textContent)

// let abc = document.querySelectorAll("h1");  //it will slect first element of H1
// console.log(abc)

// changing content in html like innerText ,textContent and innerHTML
let h1 = document.createElement("h1")

h1.textContent = "This is H1 Heading in JS!"

document.body.append(h1)

//document.body.prepend(h1)



