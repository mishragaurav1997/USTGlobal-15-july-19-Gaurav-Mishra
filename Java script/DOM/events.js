// function sayHello(){
//     alert('Hello!!!!');
// }
let buttonElement =document.getElementById('clickbutton');
buttonElement.onclick = function (){
    alert('Hello World');
    buttonElement.textContent = 'New Button';
} 
 function createPelement(){
     let pElementData =document.createElement('p');
     pElementData.textContent = 'This is P Element';
     document.body.appendChild(pElementData);
 }
 let Button=document.getElementById('click');
 Button.addEventListener('click',function(){
alert("Good Evening");
 });
 let hi = document.getElementById('alert');
 hi.addEventListener('click',function(){
     alert("Good Evening");
 });
 let h1Element = document.createElement('h6');
 function showText(){
    let show = document.getElementById("showData");
    console.log(show.value);
    // let h1Element = document.createElement('h6');
 h1Element.textContent = show.value;
 document.body.appendChild(h1Element);
 }
 