//text content to change the property ='This is new p tag';
//get Element by ID
let pElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent = 'This is new p tag';
//get Element by class name 
let divElements = document.getElementsByClassName('blue');
console.log(divElements);
let pElements = document.getElementsByTagName('p');
console.log(pElements);
// nodelist returned by getElementsby name('')
//querySelector('') it will return single element
//querySelectorall('class, id')//nodelist
// createElement('button') it will create element and return
let nameElements = document.getElementsByName('helement');
console.log(nameElements);
let demoElement = document.querySelector('#demo');
console.log(demoElement);
let blueClassElements = document.querySelectorAll('blue');
console.log(blueClassElements);
let buttonElement = document.createElement('button');
buttonElement.textContent ='Click Me';
console.log(buttonElement);
document.body.appendChild(buttonElement);
let spanEle = document.getElementById('spanid');
spanEle.style.color = 'blue';
let buttonElement1 = document.getElementById('buttonEle');
//buttonElement1.className='add';
buttonElement1.classList='add add1';
console.log("=============================");

document.getElementById('tableId').innerHTML=`
<table border ="2">
     <tr>
         <td>Name</td>
         <td>Age</td>
     </tr>
     <tr>
         <td>John</td>
         <td>14</td>
     </tr>
     <tr>
         <td>Dinga</td>
         <td>20</td>
      </tr>
      <tr>
                                <td>Sundari</td>
                                <td>22</td>
       </tr>
 </table> `;
{/* 
tableElements = document.createElement('table');
document.body.appendChild(tableElements);
tr1= document.createElement('tr1');
document.tableElements.appendChild(tr1);
trd1=document.createElement('td1');
trd1.textContent ='Name';
trd2=document.createElement('td2');
trd2.textContent ='age';
tr2 = document.createElement('tr2');
document.tableElements.appendChild(tr1);
trd2=document.createElement('td2');
trd2.textContent ='age'; */}
let pElementsData = document.getElementById('demo1');
//pElementsData.style.color = 'blue';
pElementsData.className ='blue';
pElementsData.classList = 'blue fonts';




