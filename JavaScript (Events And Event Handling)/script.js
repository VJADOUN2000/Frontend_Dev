 // Event mmatlab hai koi action hua

 // event listener is like apne koi action ka reaction diya


 // ================aDD eVENT Listener ==========================>

 let h1 = document.querySelector("h1");

 h1.addEventListener("dblclick", function(){
    h1.style.color = "red";
 })


 // ========================Remove EventListener========================>


   let p =document.querySelector("p");


   function colorChange(){
      p.style.color ="Green"
   }

   p.addEventListener("click",colorChange )
   p.removeEventListener("click", colorChange);  // => will remove the event cick from p tag


   



