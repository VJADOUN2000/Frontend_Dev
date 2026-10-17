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

// ==========Theroy Questions ====================================>
    
//Q1. What is DOM? How does it represent in HTML Structure?

// every html element is like a node and html structure is represent as a tree

//Q2. Name the type of nodes in html tree
// Document node , Text node, Eelement node, Comment node


//Q3. difference between element node vs text node

// Simple example <P>Hello this is sample for example</p>

//element node -> it is actual html tag , it can have children too like <bold>, <i> 
//Text node -> it is the text inside the tag, It cannot have children 

//Q4. Simple html code for inspecting html code like which is element node and text node in html

//Q5. Difference between getElementById() and querySelector()

// Answer 5. in getElementById() you can only select elemnt by id whereas in querySelector you can select id, element, class and even attribute
// and also no use of # in id in () while in queryselector("#hulu") is required to tell it is id.

//Q6. what does getElementByclassName return? Is IT IS ARRAY

// no, it is not arry it is HTMLCollection 

// Q7. Simple querySelectorAll to select buy-now class in html

//T1 Select element by id and change its content

let h2 = document.querySelector("#h")

h2.textContent ="Welcome to sheriyans!"


//T2 print all li elements and print their text using loop

let lis = document.querySelectorAll("li")

lis.forEach(function(val){
    console.log(val.innerHTML);
})

for(let k=0;k<lis.length;k++){
    console.log(lis[k].textContent)
}

//Q8. Difference between textContent, innerText & innerHTML
 
// Answer like textContent and innerText is mostly same
// textContent --> renders all text in html element
// innerText --> only renders the visible text only
// innerHTML --> it includes the html tags (HTML structure inside the element.)

//Q9 when to use innerText or textContent

//Task 3 select a paragraph nad  replace it content with:

// <b>Updated</b> by JavaScript

let p =document.querySelector("p");
p.innerHTML = "<b>Updated</b> by JavaScript"

//Q10. How do you get the SRC of a image uisng JS?  getAttribute

let img = document.querySelector("img")

//console.log(img.src);

console.log(img.getAttribute("src")) // this is also used to get scr attribute using getAttribute

//Q11. How to change src in html  ---> Using setAttribute

document.querySelector("img").setAttribute("src", "https://images.unsplash.com/photo-1790181397194-ccc0fcfb8565?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D")

// Task 4 Select a link and update its href element

document.querySelector("a").setAttribute("href", "https://www.google.com")

//Q12. Add a title sttribute to s div dynamically.

let div = document.querySelector("div");

div.setAttribute("title", "some")  // this will add title attribute to div

//Q13. Remove a disabled attribute from a button

let btn = document.querySelector("button");

btn.removeAttribute("disabled") // this will remove disabled attribute from html

//Q14. What does createElement() do? What's returned?

//It create an element in html and return html node 

let h5 = document.createElement("h1");

console.log(h5)


//Q15. What the difference between appendChild vs prepend();

//Example if there is 4 child in div or html then appendchild will add the element at the end and vice versa for prepend



//Q16.Can you remove an element using removechild()

let div1 = document.querySelector("div");
let h9 = document.querySelector("h2")

div1.removeChild(h9);  // this will  remove heading 2 from div 

// Task  --> Create a new list <li>New Task</li> and add it to the end of a <ul>

let task = document.querySelector("#task")

let li =document.createElement("li")

li.textContent ="Dragon ball Super"

task.appendChild(li)    // this will add the li list in div