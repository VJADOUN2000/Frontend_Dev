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

// let a = document.getElementById("abcd") 
// console.log(a)

// let ab = document.querySelector("h1");  //it will slect first element of H1
// console.log(ab.textContent)

// let abc = document.querySelectorAll("h1");  //it will slect first element of H1
// console.log(abc)

// changing content in html like innerText ,textContent and innerHTML
// let h1 = document.createElement("h1")

// h1.textContent = "This is H1 Heading in JS!"

// document.body.append(h1) // will appear after the script

//document.body.prepend(h1)  // will appeaer in html before the script


//============Create Element in HTML ===========================>


// let h1 = document.createElement("h1");

// h1.textContent ="Hello ji mei baahar se aaya hu";

// document.querySelector("div").prepend(h1)

//h1.remove();  // It will remove h1 element above wala

// h1.style.color = "Red"
// h1.style.fontFamily = "Gilroy";
// h1.style.textTransform = "Capitalize"
let h1 = document.querySelector("h1")

console.dir(h1)

h1.classList.add("hulu")  // classlist is used to get access to class atrribute in a html tag


h1.classList.toggle("hulu")  // it just act as a switch like if class is apply it remove and vice versa


