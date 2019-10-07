var vege = ['brinjal','cumcumber'];
console.log(vege);
for(i=0;i<vege.length;i++)
console.log(vege[i]);
 var fruits = new Array ('Apple','Banana','Pineapple');
 console.log(fruits);

 for(var j=0;j<fruits.length;j++)
 console.log(fruits[j]);
 console.log(typeof fruits);
 console.log(typeof vege);

 // function addition
 function add (a,b){
     var sum;
     sum = a+b;
     return sum;
 }
 var op = add(10,20);
 console.log("addition is =" +op);

 // function expression
 var add = function (a,b){
     var sum;
      sum = a+b;
      return sum;
 }
var op = add(20,20);
console.log("add is ="+op);

// anonymous function 
(function (a,b){
    var sum = a+b;
    console.log("addition is =" +sum);
}
(20,30));

// lambda function 
var add = (a,b) =>{
    var sum;
    sum = a+b;
    return sum;
}
var a =add(10,30);
console.log("add is =="+a);

// string

var str = 'Purushottam';
var newString = str.toUpperCase();
console.log(newString);

// Window Alert


// we use alert  message in browser alert("Hello")
window.alert("Hello");
alert("Hello world");
//confirm message it will return true or false 
let isAdult = confirm ("Are you Sure");
console.log("Is Adult "+isAdult);
 let name = prompt("What is Your Name?");
 console.log('Name = '+name);

 