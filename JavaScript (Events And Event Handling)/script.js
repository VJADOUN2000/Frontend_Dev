 // Event mmatlab hai koi action hua

 // event listener is like apne koi action ka reaction diya


 // ================aDD eVENT Listener ==========================>

 let h1 = document.querySelector("h1");

 h1.addEventListener("dblclick", function(){
    h1.innerHTML = "Solo leveling";
 })


 // ========================Remove EventListener========================>


   let p =document.querySelector("p");


   function colorChange(){
      p.style.color ="Green"
   }

   p.addEventListener("click",colorChange )
   p.removeEventListener("click", colorChange);  // => will remove the event cick from p tag


   // Input EventListener

let input = document.querySelector("input");

// input.addEventListener("input", function(ele){
//    if(ele.data!== null){
//       console.log(ele.data)
//    }
// })
 

// Change in EventListener

// ye jab chalta hai job input or textarea mei kuck change hojaye

let select = document.querySelector("select");

let device = document.querySelector("#device");

select.addEventListener("change", function(dets){
   console.log(dets.target.value)
   device.textContent = `${dets.target.value}` + " Device Selected"
})
