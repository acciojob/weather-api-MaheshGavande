//your JS code here.


let p=document.querySelector('p');
let div =document.querySelector('div');

let button  = document.querySelector('button');
button.addEventListener('click' , ()=>{
    div.id = "weather"
   // p.innerText = "";
   p.innerText = "Current weather in London : Clouds"; 
})